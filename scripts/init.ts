#!/usr/bin/env tsx
/**
 * Template Initialization Script
 * 
 * This script helps set up a new project based on this template.
 * It will:
 * 1. Prompt for a project name and package name
 * 2. Update package.json with the new name
 * 3. Update README.md with the new project name
 * 4. Optionally remove example files
 * 5. Optionally initialize a fresh git repository
 * 
 * Usage:
 *   pnpm init:template
 * 
 * Options:
 *   --name <name>       Set project name non-interactively
 *   --clean             Remove example files
 *   --skip-git          Skip git initialization
 */

import fs from 'fs-extra';
import path from 'path';
import { createInterface } from 'readline';
import { execSync } from 'child_process';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  name: args.includes('--name') ? args[args.indexOf('--name') + 1] : undefined,
  clean: args.includes('--clean'),
  skipGit: args.includes('--skip-git')
};

// Helper to prompt for input
const prompt = (question: string, defaultValue?: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(
      `${question}${defaultValue ? ` (${defaultValue})` : ''}: `,
      (answer) => {
        resolve(answer || defaultValue || '');
      }
    );
  });
};

// Helper to update file content
const updateFile = (filePath: string, replacer: (content: string) => string): void => {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    fs.writeFileSync(filePath, replacer(content));
    console.log(`✅ Updated ${filePath}`);
  } else {
    console.log(`⚠️ File not found: ${filePath}`);
  }
};

// Main initialization function
async function init() {
  console.log('🚀 Initializing new project from template...\n');
  
  // Get project name
  const projectName = options.name || await prompt('Project name', path.basename(process.cwd()));
  const packageName = await prompt('Package name (for package.json)', projectName.toLowerCase().replace(/\s+/g, '-'));
  
  console.log('\nUpdating project files...');
  
  // Update package.json
  updateFile('package.json', (content) => {
    const pkg = JSON.parse(content);
    pkg.name = packageName;
    pkg.version = '0.1.0';
    return JSON.stringify(pkg, null, 2);
  });
  
  // Update README.md
  updateFile('README.md', (content) => {
    // Replace the first heading line with the new project name
    return content.replace(/^# .*$/m, `# ${projectName}`);
  });
  
  // Clean up example files if requested
  if (options.clean) {
    console.log('\nRemoving example files...');
    
    // List of example files/directories to remove
    const examplePaths = [
      'src/examples',
      'src/docs/prd.md',
      'src/docs/strategy.md',
      'src/docs/next_steps.md'
      // Note: We keep template_usage.md as it's part of the template documentation
    ];
    
    for (const exPath of examplePaths) {
      const fullPath = path.join(process.cwd(), exPath);
      if (fs.existsSync(fullPath)) {
        fs.removeSync(fullPath);
        console.log(`🗑️ Removed ${exPath}`);
      }
    }
  }
  
  // Initialize git repository if not skipped
  if (!options.skipGit) {
    console.log('\nInitializing git repository...');
    try {
      execSync('git init', { stdio: 'inherit' });
      execSync('git add -A', { stdio: 'inherit' });
      execSync('git commit -m "chore: scaffold from template"', { stdio: 'inherit' });
      console.log('✅ Git repository initialized with initial commit');
    } catch (error) {
      console.error('⚠️ Failed to initialize git repository:', error);
    }
  }
  
  console.log('\n🎉 Project initialization complete!');
  console.log(`\nNext steps:
  1. Review and update the README.md
  2. Run 'pnpm dev' to start the development server
  3. Start building your awesome project!`);
  
  rl.close();
}

// Run the initialization
init().catch((error) => {
  console.error('Error during initialization:', error);
  process.exit(1);
});
