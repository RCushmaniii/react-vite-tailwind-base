// File: src/components/layout/Header.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (to: string) => {
    setIsMenuOpen(false);
    navigate(to);
  };

  return (
    <header className="bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Branding */}
          <div className="flex-shrink-0">
            <Link to="/home" onClick={() => setIsMenuOpen(false)}>
              <img className="h-12 w-auto" src="/logo.png" alt="React Vite Tailwind Base Logo" />
            </Link>
          </div>

          {/* Desktop Branding - Hidden on mobile */}
          <div className="hidden sm:flex items-center">
            <Link to="/docs/template_usage" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors duration-200">
              <span className="font-bold text-md text-muted-foreground">React • Vite • Tailwind</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/components" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-primary font-medium">Components</Link>
            <Link to="/examples" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-primary font-medium">Examples</Link>
            <Link to="/docs/template_usage" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-primary font-medium">Docs</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          {/* Mobile Branding Header */}
          <div className="px-4 pt-3 pb-2 border-b border-border">
            <Link to="/docs/template_usage" onClick={() => handleNavClick('/docs/template_usage')} className="block text-center hover:text-primary transition-colors duration-200">
              <span className="font-bold text-sm text-muted-foreground">React • Vite • Tailwind</span>
            </Link>
          </div>
          {/* Mobile Nav Links */}
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/components" onClick={() => handleNavClick('/components')} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted">Components</Link>
            <Link to="/examples" onClick={() => handleNavClick('/examples')} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted">Examples</Link>
            <Link to="/docs/template_usage" onClick={() => handleNavClick('/docs/template_usage')} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted">Docs</Link>
          </div>
        </div>
      )}
    </header>
  );
}

