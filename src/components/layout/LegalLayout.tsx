// File: src/components/layout/LegalLayout.tsx
import type { ReactNode } from 'react';
interface LegalLayoutProps {
  children: ReactNode;
  title: string;
  lastUpdated?: string;
}
/**
 * Layout component for legal pages like Privacy Policy and Terms of Service
 * Follows SoC by handling only the layout structure
 */
export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 pb-6 border-b border-border">
          <h1 className="text-3xl font-bold mb-2 text-foreground">{title}</h1>
          {lastUpdated && (
            <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          )}
        </header>
        
        <div className="space-y-6">
          {children}
        </div>
        
        <footer className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground">
          <p>
            If you have any questions about these {title.toLowerCase()}, please contact us.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default LegalLayout;
