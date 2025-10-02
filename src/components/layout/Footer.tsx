// File: src/components/layout/Footer.tsx

type FooterProps = {
  navigate: (page: string) => void;
};

export function Footer({ navigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const linkStyles = "text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200";
  const headingStyles = "text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-3";

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Logo for mobile - centered at the top */}
        <div className="flex justify-center mb-8 sm:hidden">
          <div className="flex flex-col items-center">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('home'); }}>
              <img className="h-12 w-auto mb-2" src="/logo.png" alt="React Vite Tailwind Base logo" />
            </a>
            <a href="/docs/template_usage" onClick={(e) => { e.preventDefault(); navigate('docs/template_usage'); }} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
              <span className="font-bold text-sm text-gray-600 dark:text-gray-200">React • Vite • Tailwind</span>
            </a>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-8">
          
          {/* Column 1: Features */}
          <div className="space-y-2">
            <h3 className={headingStyles}>Features</h3>
            <ul className="space-y-2">
              <li><a href="/components" onClick={(e) => { e.preventDefault(); navigate('components'); }} className={linkStyles}>Components</a></li>
              <li><a href="/examples" onClick={(e) => { e.preventDefault(); navigate('examples'); }} className={linkStyles}>Examples</a></li>
              <li><a href="/docs/template_usage" onClick={(e) => { e.preventDefault(); navigate('docs/template_usage'); }} className={linkStyles}>Template Usage</a></li>
              <li><a href="/docs/core_coding_principals" onClick={(e) => { e.preventDefault(); navigate('docs/core_coding_principals'); }} className={linkStyles}>Coding Principles</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-2">
            <h3 className={headingStyles}>Resources</h3>
            <ul className="space-y-2">
              <li><a href="/docs/readme" onClick={(e) => { e.preventDefault(); navigate('docs/readme'); }} className={linkStyles}>README</a></li>
              <li><a href="/docs/next_steps" onClick={(e) => { e.preventDefault(); navigate('docs/next_steps'); }} className={linkStyles}>Next Steps</a></li>
              <li><a href="/docs/prd" onClick={(e) => { e.preventDefault(); navigate('docs/prd'); }} className={linkStyles}>Product Doc</a></li>
              <li><a href="https://github.com/RCushmaniii/" target="_blank" rel="noopener noreferrer" className={linkStyles}>GitHub</a></li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div className="space-y-2">
            <h3 className={headingStyles}>Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('privacy'); }} className={linkStyles}>Privacy Policy</a></li>
              <li><a href="/terms" onClick={(e) => { e.preventDefault(); navigate('terms'); }} className={linkStyles}>Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Branding/Logo - Hidden on mobile, shown on tablet and up */}
          <div className="hidden sm:flex items-start justify-end">
            <div className="flex flex-col items-center">
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('home'); }}>
                <img className="h-12 w-auto mb-2" src="/logo.png" alt="React Vite Tailwind Base logo" />
              </a>
              <a href="/docs/template_usage" onClick={(e) => { e.preventDefault(); navigate('docs/template_usage'); }} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                <span className="font-bold text-md text-gray-600 dark:text-gray-200">React • Vite • Tailwind</span>
              </a>
            </div>
          </div>

        </div>
        
        {/* Copyright notice */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {currentYear} React Vite Tailwind Base Template. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}