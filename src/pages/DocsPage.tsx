// File: src/pages/DocsPage.tsx
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { FileText, BookOpen, Code, Lightbulb, ListTodo, Rocket, History, Smartphone } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

const DocsLayout = ({ children, activeDoc, navigate }: { children: React.ReactNode, activeDoc: string, navigate: (path: string) => void }) => {
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
              onClick={() => navigate(`/docs/${id}`)}
              className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md transition-colors duration-150 ${
                activeDoc === id
                  ? 'bg-muted text-foreground font-semibold'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
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

const validDocNames = [
  'readme',
  'quick_start',
  'template_usage',
  'mobile_responsiveness',
  'core_coding_principals',
  'changelog',
  'prd',
  'next_steps',
] as const;

type ValidDocName = (typeof validDocNames)[number];

const docPaths: Record<ValidDocName, string> = {
  readme: '/README.md',
  quick_start: '/src/docs/quick_start.md',
  template_usage: '/src/docs/template_usage.md',
  mobile_responsiveness: '/src/docs/mobile_responsiveness.md',
  core_coding_principals: '/src/docs/core_coding_principals.md',
  changelog: '/src/docs/changelog.md',
  prd: '/src/docs/prd.md',
  next_steps: '/src/docs/next_steps.md',
};

export function DocsPage() {
  const navigate = useNavigate();
  const params = useParams<{ docName?: string }>();
  const activeDoc: ValidDocName = validDocNames.includes(params.docName as ValidDocName)
    ? (params.docName as ValidDocName)
    : 'readme';

  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoc = async () => {
      setLoading(true);
      setError(null);
      const filePath = docPaths[activeDoc];

      try {
        const response = await fetch(filePath);

        if (!response.ok) {
          throw new Error(`Could not load ${filePath}. Status: ${response.status}`);
        }

        const text = await response.text();
        const html = await marked.parse(text);

        if (typeof html === 'string') {
          setContent(DOMPurify.sanitize(html));
        } else {
          setError('Error parsing markdown content');
        }
      } catch (e) {
        const message = e instanceof Error ? e.message : 'An unknown error occurred.';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoc();
  }, [activeDoc]);

  return (
    <DocsLayout navigate={navigate} activeDoc={activeDoc}>
      <article className="prose prose-base md:prose-lg dark:prose-invert max-w-none bg-card p-4 md:p-6 lg:p-8 rounded-lg shadow-xs border border-border">
        {loading && <p>Loading document...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        )}
      </article>
    </DocsLayout>
  );
}
