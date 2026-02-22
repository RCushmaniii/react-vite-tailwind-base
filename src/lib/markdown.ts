// File: src/lib/markdown.ts
import { marked } from 'marked';
import DOMPurify from 'dompurify';

/**
 * Utility function to load and parse markdown content
 * @param path Path to the markdown file
 * @returns Promise with the sanitized HTML content
 */
export async function loadMarkdown(path: string): Promise<string> {
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path;

  const response = await fetch(normalizedPath);

  if (!response.ok) {
    throw new Error(`Failed to load markdown: ${response.status}`);
  }

  const text = await response.text();
  const html = await marked.parse(text);

  return DOMPurify.sanitize(html);
}

export default loadMarkdown;
