#!/usr/bin/env node

/**
 * This script initializes the MSW service worker.
 * Run it with: node scripts/msw-init.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if MSW is installed
try {
  // Use dynamic import to check if MSW is available
  await import('msw');
  console.log('✅ MSW is installed');
} catch (error) {
  console.error('❌ MSW is not installed. Please install it with: pnpm add msw');
  process.exit(1);
}

// Run the MSW init command
try {
  console.log('📝 Initializing MSW service worker...');
  execSync('npx msw init public --save', { stdio: 'inherit' });
  console.log('✅ MSW service worker initialized');
} catch (error) {
  console.error('❌ Failed to initialize MSW service worker:', error);
  process.exit(1);
}

// Add the script to package.json
try {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }
  
  if (!packageJson.scripts['msw:init']) {
    packageJson.scripts['msw:init'] = 'node scripts/msw-init.js';
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Added msw:init script to package.json');
  }
} catch (error) {
  console.error('❌ Failed to update package.json:', error);
}

console.log('🎉 MSW setup complete!');
console.log('📋 You can regenerate the service worker anytime with: pnpm msw:init');
