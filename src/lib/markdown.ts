// File: src/lib/markdown.ts
import { marked } from 'marked';

/**
 * Utility function to load and parse markdown content
 * @param path Path to the markdown file
 * @returns Promise with the parsed HTML content
 */
export async function loadMarkdown(path: string): Promise<string> {
  try {
    // Normalize the path to ensure it works in different environments
    const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
    
    // Log the path for debugging
    console.log('Loading markdown from:', normalizedPath);
    
    // Fetch the markdown file
    const response = await fetch(normalizedPath);
    
    if (!response.ok) {
      throw new Error(`Failed to load markdown: ${response.status}`);
    }
    
    // Get the text content
    const text = await response.text();
    
    // Log the first part of the content for debugging
    console.log('Markdown content (first 100 chars):', text.substring(0, 100));
    
    // Parse the markdown to HTML
    const html = await marked.parse(text);
    
    return html;
  } catch (error) {
    console.error('Error loading markdown:', error);
    throw error;
  }
}

export default loadMarkdown;
