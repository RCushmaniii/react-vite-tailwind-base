// File: src/pages/HomePage.tsx
import { Zap, Shield, Palette, Code2, Rocket, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useForm } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

export function HomePage() {
  // FormSpree hook
  const [state, handleSubmit] = useForm("mgvnkbgq");

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Powered by Vite 7 for instant server start and blazing fast HMR',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30'
    },
    {
      icon: Shield,
      title: 'Type-Safe',
      description: 'Built with TypeScript for better DX, fewer bugs, and maintainable code',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      icon: Palette,
      title: 'Modern Styling',
      description: 'Tailwind CSS + ShadCN UI for beautiful, responsive designs',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    },
    {
      icon: Code2,
      title: 'Best Practices',
      description: 'Following SOLID principles, DRY, and modern React patterns',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    },
    {
      icon: Rocket,
      title: 'Production Ready',
      description: 'Optimized builds, code splitting, and deployment-ready',
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/30'
    },
    {
      icon: Sparkles,
      title: 'Rich Components',
      description: '17+ pre-built ShadCN components with animations',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100 dark:bg-pink-900/30'
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 rounded-2xl"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="animate-in slide-in-from-top duration-500" variant="secondary">
              <Sparkles className="h-3 w-3 mr-1" />
              React 19 • Vite 7 • TypeScript • ShadCN UI
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-in slide-in-from-bottom duration-700">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pb-2 inline-block">
                Build Modern Apps
              </span>
              <br />
              <span className="text-gray-900 dark:text-gray-100">Lightning Fast</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-150">
              A production-ready React template with ShadCN UI, data visualizations, and everything you need to ship faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom duration-700 delay-300">
              <Button size="lg" className="w-full sm:w-auto text-lg h-12 group" asChild>
                <a href="/components">
                  View Components
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-12" asChild>
                <a href="/docs/quick_start">
                  Quick Start Guide
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Everything You Need
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A complete foundation with best practices and modern tools already configured
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <Card className="max-w-5xl mx-auto border-2 border-primary bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
                  Ready to Build?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Start building your next project with our production-ready template
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">Pre-configured development environment</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">Comprehensive documentation & examples</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">Best practices & modern patterns</p>
                  </div>
                </div>
              </div>
              
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>Send us a message and we'll get back to you</CardDescription>
                </CardHeader>
                <CardContent>
                  {state.succeeded ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30">
                        <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Thank you!</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          We've received your message and will be in touch soon.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form 
                      onSubmit={handleSubmit} 
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or ask a question..."
                          rows={4}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg" disabled={state.submitting}>
                        {state.submitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
