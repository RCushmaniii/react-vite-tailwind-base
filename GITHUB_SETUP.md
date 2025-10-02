# GitHub Template Setup Guide

## 📋 Pre-Publishing Checklist

### 1. Clean Up Sensitive Information

Before publishing, make sure to remove any sensitive data:

- [ ] Remove any API keys or secrets
- [ ] Check `.env` files (should be in `.gitignore`)
- [ ] Remove personal email addresses (except in contact section)
- [ ] Review all comments for sensitive info

### 2. Update Placeholder Information

Replace these placeholders in your files:

#### `index.html`
```html
<!-- Line 12 -->
<meta name="author" content="Your Name" />

<!-- Line 14 -->
<link rel="canonical" href="https://yourdomain.com/" />

<!-- Lines 18, 21, 27, 30 -->
Replace all instances of "https://yourdomain.com/"

<!-- Line 31 -->
<meta property="twitter:creator" content="@yourusername" />

<!-- Line 62 -->
"name": "Your Name"
```

#### `README.md`
Add a proper contact section (see template below)

### 3. Create Essential Files

Make sure these files exist:

- [ ] `README.md` - Project overview
- [ ] `LICENSE` - MIT license (or your choice)
- [ ] `.gitignore` - Already exists
- [ ] `CONTRIBUTING.md` - Optional but recommended

---

## 📝 Step-by-Step GitHub Setup

### Step 1: Prepare Your README

Update `README.md` with:

```markdown
# React Vite Tailwind Base Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)

> A modern, production-ready React template with ShadCN UI, data visualizations, and everything you need to ship faster.

![Template Preview](./preview.png)

## ✨ Features

- ⚡ **React 19** + **Vite 7** - Lightning fast development
- 🎨 **ShadCN UI** - 17+ beautiful, accessible components
- 📊 **Data Visualization** - Recharts integration with examples
- 🎯 **TypeScript** - Full type safety
- 💅 **Tailwind CSS** - Utility-first styling
- 📱 **Mobile-First** - Fully responsive design
- 🔍 **SEO Optimized** - Complete meta tags & structured data
- ♿ **Accessible** - WCAG compliant components
- 🚀 **Production Ready** - Optimized builds

## 🚀 Quick Start

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/react-vite-tailwind-base.git

# Navigate to project
cd react-vite-tailwind-base

# Install dependencies
pnpm install

# Start development server
pnpm dev
\`\`\`

Visit `http://localhost:3000` to see your app!

## 📦 What's Included

- **Interactive Components Showcase** - Full appointment booking system
- **Data Dashboard** - Charts with Area, Pie, and Bar visualizations
- **Documentation System** - Built-in markdown documentation viewer
- **Contact Form** - FormSpree integration ready
- **404 Page** - Beautiful error page with navigation
- **Mobile Navigation** - Responsive header with hamburger menu

## 🛠️ Available Scripts

\`\`\`bash
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint errors
pnpm typecheck        # Check TypeScript
pnpm format           # Format with Prettier
pnpm verify           # Run all checks + build
\`\`\`

## 📚 Documentation

- [Quick Start Guide](./src/docs/quick_start.md)
- [Template Usage](./src/docs/template_usage.md)
- [Mobile Responsiveness](./src/docs/mobile_responsiveness.md)
- [SEO Setup](./SEO_SETUP.md)
- [Changelog](./src/docs/changelog.md)

## 🎨 Tech Stack

- **React 19** - Latest React with concurrent features
- **Vite 7** - Next-generation frontend tooling
- **TypeScript 5.8** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS
- **ShadCN UI** - Radix UI + Tailwind components
- **Recharts** - Composable charting library
- **Lucide React** - Beautiful icon library
- **FormSpree** - Form backend
- **date-fns** - Date utilities

## 📁 Project Structure

\`\`\`
src/
├── components/
│   ├── layout/          # Header, Footer
│   └── ui/              # ShadCN UI components (17 components)
├── pages/
│   ├── Components.tsx   # Booking system + charts
│   ├── DocsPage.tsx     # Documentation viewer
│   ├── ExamplesPage.tsx # Code examples
│   ├── HomePage.tsx     # Landing page
│   └── NotFoundPage.tsx # 404 error page
├── lib/
│   └── utils.ts         # Utility functions
├── docs/                # Markdown documentation
└── mocks/               # MSW mock handlers
\`\`\`

## 🔧 Configuration

### FormSpree Setup

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update form ID in `src/pages/HomePage.tsx`:

\`\`\`tsx
const [state, handleSubmit] = useForm("YOUR_FORM_ID");
\`\`\`

### SEO Configuration

Update these in `index.html`:
- Author name
- Canonical URL
- Social media URLs
- Twitter handle

See [SEO_SETUP.md](./SEO_SETUP.md) for details.

## 🎯 Use Cases

Perfect for:
- ✅ SaaS applications
- ✅ Admin dashboards
- ✅ Booking/scheduling systems
- ✅ Data visualization apps
- ✅ Component libraries
- ✅ Marketing websites

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is [MIT](./LICENSE) licensed.

## 📬 Contact

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- Twitter: [@yourusername](https://twitter.com/yourusername)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ using React, Vite, Tailwind CSS, and ShadCN UI**
\`\`\`

### Step 2: Create a LICENSE File

Create `LICENSE` in the root:

\`\`\`
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
\`\`\`

### Step 3: Create a Preview Image

Create a screenshot of your template:

1. Run `pnpm dev`
2. Take a screenshot of the homepage
3. Save as `preview.png` in the root directory
4. Recommended size: 1200x630px

### Step 4: Verify .gitignore

Make sure `.gitignore` includes:

\`\`\`
# dependencies
node_modules
.pnp
.pnp.js

# testing
coverage

# production
dist
build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# editor
.vscode/*
!.vscode/extensions.json
.idea
*.swp
*.swo
*~

# OS
Thumbs.db
\`\`\`

---

## 🚀 Publishing to GitHub

### Option 1: Create New Repository on GitHub

1. **Go to GitHub**
   - Visit [github.com/new](https://github.com/new)
   - Sign in if needed

2. **Create Repository**
   - Repository name: `react-vite-tailwind-base`
   - Description: "Modern React template with ShadCN UI, data visualizations, and TypeScript"
   - Choose: **Public** (for template)
   - ❌ Don't initialize with README (you already have one)
   - ❌ Don't add .gitignore (you already have one)
   - ❌ Don't add license (you already have one)

3. **Initialize Git Locally**

\`\`\`bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: React Vite Tailwind Base Template"

# Add remote
git remote add origin https://github.com/yourusername/react-vite-tailwind-base.git

# Push to GitHub
git branch -M main
git push -u origin main
\`\`\`

### Option 2: Use GitHub CLI

\`\`\`bash
# Install GitHub CLI if needed
# https://cli.github.com/

# Create repository and push
gh repo create react-vite-tailwind-base --public --source=. --remote=origin --push
\`\`\`

---

## 🎯 Make it a Template Repository

After pushing to GitHub:

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Template repository**
4. ✅ Check **"Template repository"**
5. Click **Save**

Now others can use your template by clicking **"Use this template"**!

---

## 📊 Add Repository Badges

Add these to your README for a professional look:

\`\`\`markdown
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
\`\`\`

---

## 🎨 Optional: Add Topics

On GitHub, add topics to help people find your template:

- `react`
- `vite`
- `tailwindcss`
- `typescript`
- `shadcn-ui`
- `template`
- `starter`
- `boilerplate`
- `recharts`
- `react-template`

---

## 📢 Promote Your Template

### 1. Share on Social Media
- Twitter/X with hashtags: #React #Vite #TailwindCSS
- LinkedIn
- Dev.to article
- Reddit (r/reactjs, r/webdev)

### 2. Submit to Lists
- [Awesome Vite](https://github.com/vitejs/awesome-vite)
- [Awesome React](https://github.com/enaqx/awesome-react)
- [Awesome Tailwind CSS](https://github.com/aniftyco/awesome-tailwindcss)

### 3. Write a Blog Post
- Explain features
- Show use cases
- Include screenshots
- Link to GitHub

---

## ✅ Final Checklist

Before publishing:

- [ ] All placeholders replaced with your info
- [ ] README.md is complete and accurate
- [ ] LICENSE file exists
- [ ] Preview image created and added
- [ ] .gitignore is correct
- [ ] All sensitive data removed
- [ ] Code is formatted (`pnpm format`)
- [ ] No lint errors (`pnpm lint`)
- [ ] TypeScript checks pass (`pnpm typecheck`)
- [ ] Build succeeds (`pnpm build`)
- [ ] All links in README work
- [ ] FormSpree form ID is placeholder or removed
- [ ] SEO meta tags updated
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Template repository enabled
- [ ] Topics added
- [ ] Repository description set

---

## 🎉 You're Ready!

Your template is now live and ready for others to use!

**Next Steps:**
1. Star your own repository (why not? 😄)
2. Share it with the community
3. Monitor issues and pull requests
4. Keep it updated with latest versions
5. Add more features based on feedback

**Good luck with your template! 🚀**
