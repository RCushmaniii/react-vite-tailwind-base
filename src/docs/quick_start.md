# Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

---

## 📍 Key Pages

- **Home Page** (`/home`) - Main landing page
- **Components** (`/components`) - Interactive booking system + data dashboard
- **Examples** (`/examples`) - Code examples and demos
- **Docs** (`/docs/template_usage`) - Documentation

---

## 🎨 Using ShadCN Components

### Import Components

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
```

### Example Usage

```tsx
import { Button } from '@/components/ui/button';

function MyComponent() {
  return (
    <Button variant="default" size="lg">
      Click Me
    </Button>
  );
}
```

### Adding More Components

```bash
# Add a single component
pnpm dlx shadcn@latest add [component-name]

# Example: Add dropdown menu
pnpm dlx shadcn@latest add dropdown-menu

# Add multiple components
pnpm dlx shadcn@latest add toast popover command
```

---

## 🎯 Common Tasks

### Creating a New Page

1. Create file in `src/pages/MyPage.tsx`
2. Add route in `src/routes/AppRouter.tsx`
3. Update navigation in `src/components/layout/Header.tsx`

### Adding Icons

```tsx
import { Calendar, User, Mail, Settings } from 'lucide-react';

function MyComponent() {
  return (
    <div>
      <Calendar className="h-6 w-6 text-primary" />
      <User className="h-4 w-4" />
    </div>
  );
}
```

Browse all icons: https://lucide.dev/icons/

### Creating Charts

```tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
];

function MyChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  );
}
```

---

## 🎨 Styling Tips

### Using Tailwind Classes

```tsx
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-primary">Hello</h1>
</div>
```

### Responsive Design

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
</div>
```

### Using the `cn` Utility

```tsx
import { cn } from '@/lib/utils'

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  "more-classes"
)}>
```

---

## 🔧 Useful Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Check for errors
pnpm lint:fix         # Auto-fix errors
pnpm format           # Format code
pnpm typecheck        # Check TypeScript
pnpm verify           # Run all checks

# MSW (API Mocking)
pnpm msw:init         # Initialize MSW
```

---

## 📦 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   └── ui/              # ShadCN components
├── pages/               # Page components
├── lib/                 # Utilities
├── docs/                # Documentation
├── mocks/               # API mocks
└── App.tsx              # Main app
```

---

## 🎯 Best Practices

### Component Structure

```tsx
// Good: Single responsibility
function UserCard({ user }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{user.email}</p>
      </CardContent>
    </Card>
  );
}
```

### State Management

```tsx
// Use local state for UI
const [isOpen, setIsOpen] = useState(false);

// Use props for data
function MyComponent({ data }) {
  // ...
}
```

### Type Safety

```tsx
// Define types for props
interface UserCardProps {
  user: {
    name: string;
    email: string;
  };
}

function UserCard({ user }: UserCardProps) {
  // TypeScript will catch errors
}
```

---

## 🆘 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
pnpm dev -- --port 3001
```

### TypeScript Errors

```bash
# Clear cache and rebuild
Remove-Item -Recurse -Force node_modules, .vite
pnpm install
pnpm dev
```

### Tailwind Not Working

```bash
# Restart dev server
# Ctrl+C then pnpm dev
```

---

## 📚 Resources

- [ShadCN UI Docs](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Recharts Docs](https://recharts.org)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)

---

**Happy Coding! 🚀**
