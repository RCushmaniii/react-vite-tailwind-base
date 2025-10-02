// File: src/pages/DocsPage.tsx
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { FileText, BookOpen, Code, Lightbulb, ListTodo, Rocket, History, Smartphone } from 'lucide-react';

// Create a local component that doesn't rely on the import
const DocsLayout = ({ children, activeDoc, navigate }: { children: React.ReactNode, activeDoc: string, navigate: (page: string) => void }) => {
  const navItems = [
    { id: 'readme', label: 'README', icon: FileText },
    { id: 'quick_start', label: 'Quick Start', icon: Rocket },
    { id: 'template_usage', label: 'Template Usage', icon: BookOpen },
    { id: 'mobile_responsiveness', label: 'Mobile Responsive', icon: Smartphone },
    { id: 'core_coding_principals', label: 'Coding Principles', icon: Code },
    { id: 'changelog', label: 'Changelog', icon: History },
    { id: 'prd', label: 'Product Doc (PRD)', icon: Lightbulb },
    { id: 'next_steps', label: 'Next Steps', icon: ListTodo },
  ];

  return (
    <div className="md:grid md:grid-cols-12 md:gap-8">
      <aside className="md:col-span-3 lg:col-span-2 mb-6 md:mb-0">
        <nav className="space-y-1 md:sticky md:top-4">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => navigate(`docs/${id}`)}
              className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md transition-colors duration-150 ${
                activeDoc === id
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 font-semibold'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </nav>
      </aside>
      <div className="md:col-span-9 lg:col-span-10">
        {children}
      </div>
    </div>
  );
};

type DocsPageProps = {
  docName: 'readme' | 'quick_start' | 'template_usage' | 'mobile_responsiveness' | 'core_coding_principals' | 'changelog' | 'prd' | 'next_steps';
  navigate: (page: string) => void;
};

export function DocsPage({ docName, navigate }: DocsPageProps) {
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoc = async () => {
      setLoading(true);
      setError(null);
      let filePath = '/README.md'; // Default to README
      
      if (docName === 'readme') {
        filePath = '/README.md';
      } else if (docName === 'quick_start') {
        filePath = '/src/docs/quick_start.md';
      } else if (docName === 'template_usage') {
        filePath = '/src/docs/template_usage.md';
      } else if (docName === 'mobile_responsiveness') {
        filePath = '/src/docs/mobile_responsiveness.md';
      } else if (docName === 'core_coding_principals') {
        filePath = '/src/docs/core_coding_principals.md';
      } else if (docName === 'changelog') {
        filePath = '/src/docs/changelog.md';
      } else if (docName === 'prd') {
        filePath = '/src/docs/prd.md';
      } else if (docName === 'next_steps') {
        filePath = '/src/docs/next_steps.md';
      }
      
      try {
        console.log(`Fetching document from: ${filePath}`);
        const response = await fetch(filePath);
        
        if (!response.ok) {
          throw new Error(`Could not load ${filePath}. Status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log(`Received markdown content (first 50 chars): ${text.substring(0, 50)}...`);
        
        // Parse the markdown to HTML
        const html = await marked.parse(text);
        
        // Make sure html is a string
        if (typeof html === 'string') {
          console.log(`Parsed HTML (first 50 chars): ${html.substring(0, 50)}...`);
          setContent(html);
        } else {
          console.error('Marked returned a non-string value:', html);
          setError('Error parsing markdown content');
        }
      } catch (e) {
        const message = e instanceof Error ? e.message : 'An unknown error occurred.';
        setError(message);
        console.error("Error fetching doc:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchDoc();
  }, [docName]);

  return (
    <DocsLayout navigate={navigate} activeDoc={docName}>
      <article className="prose prose-base md:prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-800/50 p-4 md:p-6 lg:p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
        {loading && <p>Loading document...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        )}
      </article>
    </DocsLayout>
  );
}
