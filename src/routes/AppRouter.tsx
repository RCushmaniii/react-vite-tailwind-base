import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AppLayout from '../App';

const HomePage = lazy(() => import('../pages/HomePage').then(m => ({ default: m.HomePage })));
const ComponentsPage = lazy(() => import('../pages/Components').then(m => ({ default: m.ComponentsPage })));
const DocsPage = lazy(() => import('../pages/DocsPage').then(m => ({ default: m.DocsPage })));
const ExamplesPage = lazy(() => import('../pages/ExamplesPage').then(m => ({ default: m.ExamplesPage })));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('../pages/TermsOfServicePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
        </div>
      }>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/examples" element={<ExamplesPage />} />
            <Route path="/docs" element={<Navigate to="/docs/readme" replace />} />
            <Route path="/docs/:docName" element={<DocsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
