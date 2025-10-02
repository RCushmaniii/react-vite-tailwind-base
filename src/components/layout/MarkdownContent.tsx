// File: src/components/layout/MarkdownContent.tsx
import { useState, useEffect } from 'react';
import { loadMarkdown } from '../../lib/markdown';

interface MarkdownContentProps {
  filePath: string;
}

/**
 * Component for displaying markdown content from a file
 * Follows SRP by focusing only on fetching and rendering markdown content
 */
export function MarkdownContent({ filePath }: MarkdownContentProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Define the cobalt blue color for use in styles
  const cobaltBlue = '#0047ab';

  // Fetch markdown content from the file
  useEffect(() => {
    const fetchMarkdown = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Use the utility function to load and parse markdown
        const html = await loadMarkdown(filePath);
        setContent(html);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching markdown content:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMarkdown();
  }, [filePath]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {loading && (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: cobaltBlue }}></div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>Error: {error}</p>
        </div>
      )}
      
      {!loading && !error && (
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-h1:text-xl prose-h1:font-semibold prose-h2:text-lg prose-h2:font-medium prose-a:text-blue-600 dark:prose-invert dark:prose-headings:text-gray-100 dark:prose-a:text-blue-400"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
}

export default MarkdownContent;
