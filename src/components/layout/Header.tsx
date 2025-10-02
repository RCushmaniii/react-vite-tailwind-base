// File: src/components/layout/Header.tsx
import { useState } from 'react';

type HeaderProps = {
  navigate: (page: string) => void;
};

export function Header({ navigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    setIsMenuOpen(false);
    navigate(page);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Branding */}
          <div className="flex-shrink-0">
            <a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
              <img className="h-12 w-auto" src="/logo.png" alt="React Vite Tailwind Base Logo" />
            </a>
          </div>

          {/* Desktop Branding - Hidden on mobile */}
          <div className="hidden sm:flex items-center">
            <a href="/docs/template_usage" onClick={(e) => { e.preventDefault(); handleNavClick('docs/template_usage'); }} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
              <span className="font-bold text-md text-gray-600 dark:text-gray-200">React • Vite • Tailwind</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="/components" onClick={(e) => { e.preventDefault(); handleNavClick('components'); }} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">Components</a>
            <a href="/examples" onClick={(e) => { e.preventDefault(); handleNavClick('examples'); }} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">Examples</a>
            <a href="/docs/template_usage" onClick={(e) => { e.preventDefault(); handleNavClick('docs/template_usage'); }} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">Docs</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          {/* Mobile Branding Header */}
          <div className="px-4 pt-3 pb-2 border-b border-gray-200 dark:border-gray-700">
            <a href="/docs/template_usage" onClick={(e) => { e.preventDefault(); handleNavClick('docs/template_usage'); }} className="block text-center hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
              <span className="font-bold text-sm text-gray-600 dark:text-gray-200">React • Vite • Tailwind</span>
            </a>
          </div>
          {/* Mobile Nav Links */}
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/components" onClick={(e) => { e.preventDefault(); handleNavClick('components'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Components</a>
            <a href="/examples" onClick={(e) => { e.preventDefault(); handleNavClick('examples'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Examples</a>
            <a href="/docs/template_usage" onClick={(e) => { e.preventDefault(); handleNavClick('docs/template_usage'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Docs</a>
          </div>
        </div>
      )}
    </header>
  );
}

