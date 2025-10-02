// File: src/pages/NotFoundPage.tsx
import { Home, Search, ArrowLeft, FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export function NotFoundPage() {
  const popularPages = [
    { name: 'Home', path: '/home', icon: Home },
    { name: 'Components', path: '/components', icon: FileQuestion },
    { name: 'Documentation', path: '/docs/template_usage', icon: Search },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8 sm:py-12">
      <div className="max-w-2xl w-full space-y-8 animate-in fade-in duration-700">
        {/* 404 Illustration */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 mb-4">
            <FileQuestion className="h-10 w-10 sm:h-12 sm:w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Page Not Found
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto px-4">
            Oops! The page you're looking for doesn't exist or has been moved to a new location.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => window.location.href = '/home'}
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </div>

        <Separator className="my-8" />

        {/* Popular Pages Card */}
        <Card className="border-2 mx-4 sm:mx-0">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Popular Pages</CardTitle>
            <CardDescription>Here are some pages you might be looking for</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {popularPages.map((page) => (
              <Button
                key={page.path}
                variant="ghost"
                className="w-full justify-start text-left h-auto py-3"
                onClick={() => window.location.href = page.path}
              >
                <page.icon className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-base">{page.name}</span>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Search Suggestion */}
        <Card className="border-2 mx-4 sm:mx-0">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
              <Search className="h-5 w-5" />
              Looking for something specific?
            </CardTitle>
            <CardDescription>Try searching our documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input 
                placeholder="Search documentation..." 
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = '/docs/template_usage';
                  }
                }}
              />
              <Button onClick={() => window.location.href = '/docs/template_usage'}>
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default NotFoundPage;
