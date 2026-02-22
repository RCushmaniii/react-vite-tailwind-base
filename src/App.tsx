// File: src/App.tsx
import { Outlet } from 'react-router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;