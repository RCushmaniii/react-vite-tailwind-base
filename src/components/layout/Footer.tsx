// File: src/components/layout/Footer.tsx
import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyles = "text-muted-foreground hover:text-primary transition-colors duration-200";
  const headingStyles = "text-sm font-semibold text-foreground tracking-wider uppercase mb-3";

  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Logo for mobile - centered at the top */}
        <div className="flex justify-center mb-8 sm:hidden">
          <div className="flex flex-col items-center">
            <Link to="/home">
              <img className="h-12 w-auto mb-2" src="/logo.png" alt="React Vite Tailwind Base logo" />
            </Link>
            <Link to="/docs/template_usage" className="hover:text-primary transition-colors duration-200">
              <span className="font-bold text-sm text-muted-foreground">React • Vite • Tailwind</span>
            </Link>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-8">
          
          {/* Column 1: Features */}
          <div className="space-y-2">
            <h3 className={headingStyles}>Features</h3>
            <ul className="space-y-2">
              <li><Link to="/components" className={linkStyles}>Components</Link></li>
              <li><Link to="/examples" className={linkStyles}>Examples</Link></li>
              <li><Link to="/docs/template_usage" className={linkStyles}>Template Usage</Link></li>
              <li><Link to="/docs/core_coding_principals" className={linkStyles}>Coding Principles</Link></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-2">
            <h3 className={headingStyles}>Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/docs/readme" className={linkStyles}>README</Link></li>
              <li><Link to="/docs/next_steps" className={linkStyles}>Next Steps</Link></li>
              <li><Link to="/docs/prd" className={linkStyles}>Product Doc</Link></li>
              <li><a href="https://github.com/RCushmaniii/" target="_blank" rel="noopener noreferrer" className={linkStyles}>GitHub</a></li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div className="space-y-2">
            <h3 className={headingStyles}>Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className={linkStyles}>Privacy Policy</Link></li>
              <li><Link to="/terms" className={linkStyles}>Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Branding/Logo - Hidden on mobile, shown on tablet and up */}
          <div className="hidden sm:flex items-start justify-end">
            <div className="flex flex-col items-center">
              <Link to="/home">
                <img className="h-12 w-auto mb-2" src="/logo.png" alt="React Vite Tailwind Base logo" />
              </Link>
              <Link to="/docs/template_usage" className="hover:text-primary transition-colors duration-200">
                <span className="font-bold text-md text-muted-foreground">React • Vite • Tailwind</span>
              </Link>
            </div>
          </div>

        </div>
        
        {/* Copyright notice */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} React Vite Tailwind Base Template. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}