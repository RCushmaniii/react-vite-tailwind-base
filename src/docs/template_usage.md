# Template Usage Guide

This document provides detailed information about how to use this template effectively.

## Template Structure

```
react-vite-tailwind-base/
├── public/               # Static assets
├── scripts/              # Utility scripts
│   └── init.ts           # Template initialization script
├── src/
│   ├── assets/           # Project assets (images, fonts, etc.)
│   ├── components/       # Reusable UI components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   └── ui/           # ShadCN UI components (17 components)
│   ├── docs/             # Documentation (markdown files)
│   ├── examples/         # Example components (removable)
│   ├── lib/              # Utility functions (cn, utils)
│   ├── mocks/            # MSW API mocking
│   └── pages/            # Page components
│       ├── Components.tsx       # Booking system + charts
│       ├── DocsPage.tsx         # Documentation viewer
│       ├── ExamplesPage.tsx     # Code examples
│       ├── HomePage.tsx         # Landing page
│       ├── NotFoundPage.tsx     # 404 error page
│       ├── PrivacyPolicyPage.tsx
│       └── TermsOfServicePage.tsx
├── .editorconfig         # Editor configuration
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── .prettierrc           # Prettier configuration
├── .prettierignore       # Prettier ignore rules
├── components.json       # ShadCN UI configuration
├── LICENSE               # Project license
├── package.json          # Project dependencies and scripts
├── README.md             # Project overview
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Getting Started

After creating a new project from this template:

1. Run `pnpm init:template` to customize the project name and other details
2. Review and update the README.md with your project information
3. Set up your environment variables by copying `.env.example` to `.env`
4. Start development with `pnpm dev`

## Key Features

### 1. ShadCN UI Components

The template includes 17 pre-built, accessible components:

- **Form Components**: Button, Input, Label, Select, Slider, Switch
- **Layout Components**: Card, Separator, Tabs, Accordion
- **Feedback Components**: Alert, Dialog, Progress, Badge
- **Data Components**: Calendar, Avatar

All components are customizable and follow best practices for accessibility.

### 2. TypeScript Configuration

The template includes a comprehensive TypeScript setup with:

- Strict type checking enabled
- Path aliases (`@/`) for cleaner imports
- Separate configs for app and Node.js code
- Full type coverage across the project

### 3. Data Visualization

Built-in charting capabilities with Recharts:

- Area charts for trends
- Pie charts for distributions
- Bar charts for comparisons
- Fully responsive and mobile-optimized

### 4. Mock Service Worker (MSW)

For local development without a backend:

- API mocking is enabled by default
- Toggle with `VITE_ENABLE_MSW=true|false` in your `.env`
- Example handlers in `src/mocks/handlers.ts`

### 5. Tailwind CSS

The template includes Tailwind CSS with:

- Typography plugin for rich text styling
- Animation utilities (tailwindcss-animate)
- Custom ShadCN theme variables
- Dark mode support

### 6. Development Workflow

Standardized scripts for consistent development:

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm typecheck` - Check TypeScript types
- `pnpm format` - Format code with Prettier
- `pnpm verify` - Run all checks (typecheck, lint, build)

## Using ShadCN Components

### Adding New Components

```bash
# Add a single component
pnpm dlx shadcn@latest add [component-name]

# Example: Add dropdown menu
pnpm dlx shadcn@latest add dropdown-menu

# Add multiple components at once
pnpm dlx shadcn@latest add toast popover command
```

### Importing Components

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
```

### Example Usage

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a card component</p>
        <Button variant="default" size="lg">
          Click Me
        </Button>
      </CardContent>
    </Card>
  )
}
```

## Using Lucide Icons

The template includes Lucide React for modern, customizable icons:

```tsx
import { Calendar, User, Mail, Settings, TrendingUp } from 'lucide-react'

function MyComponent() {
  return (
    <div className="flex items-center gap-2">
      <Calendar className="h-6 w-6 text-primary" />
      <User className="h-4 w-4 text-muted-foreground" />
    </div>
  )
}
```

Browse all 500+ icons at: https://lucide.dev/icons/

## Best Practices

1. **Component Structure**

   - Keep components small and focused
   - Use TypeScript interfaces for props
   - Follow the project's naming conventions

2. **State Management**

   - For small projects, use React's built-in state management
   - For larger projects, consider adding a state management library

3. **Styling**

   - Use Tailwind utility classes for styling
   - Create reusable component classes for consistency
   - Follow the project's design system

4. **Testing**
   - Add tests for critical components and utilities
   - Consider adding Vitest for unit testing

## Customization

### Adding Dependencies

```bash
pnpm add <package-name>       # Add a production dependency
pnpm add -D <package-name>    # Add a development dependency
```

### Modifying the Build Process

Edit `vite.config.ts` to customize the build process, add plugins, or configure proxies.

### Extending ESLint Rules

Edit `eslint.config.js` to add or modify ESLint rules.

## Deployment

This template is ready to deploy to various platforms:

- Vercel: Just connect your repository
- Netlify: Connect repository or use the Netlify CLI
- GitHub Pages: Add a GitHub Action workflow

## Troubleshooting

Common issues and solutions:

1. **TypeScript errors**: Run `pnpm typecheck` to identify and fix type issues
2. **Build failures**: Check for lint errors with `pnpm lint`
3. **MSW not working**: Ensure `VITE_ENABLE_MSW=true` in your `.env` file
