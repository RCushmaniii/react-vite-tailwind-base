// File: src/pages/ExamplesPage.tsx
import { useState, useEffect } from 'react';
import ExampleComponent from '../examples/ExampleComponent';
import MswAlert from '../components/ui/MswAlert';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface ExampleUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error(`Expected JSON response but got ${contentType}`);
  }

  return response.json();
}

export function ExamplesPage() {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<ExampleUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [userData, usersData] = await Promise.all([
          fetchJson<User>('/api/user'),
          fetchJson<ExampleUser[]>('/api/users'),
        ]);
        setUser(userData);
        setUsers(usersData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-foreground">React Vite Tailwind <span className="text-primary">Examples</span></h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">This page demonstrates various features of the template.</p>
      </div>

      {/* MSW Status Banner */}
      <MswAlert />

      <section className="space-y-6 bg-card p-6 rounded-lg shadow-xs border border-border">
        <h2 className="text-2xl font-semibold border-b border-border pb-2 text-foreground">UI Component Demonstration</h2>
        <p className="text-gray-600">This example shows a reusable React component with TypeScript props and Tailwind CSS styling.</p>
        <ExampleComponent
          title="Example Component"
          description="This is an example component with TypeScript props and Tailwind styling"
        />
      </section>

      <section className="space-y-6 bg-card p-6 rounded-lg shadow-xs border border-border">
        <h2 className="text-2xl font-semibold border-b border-border pb-2 text-foreground">Basic API Integration</h2>
        <p className="text-gray-600">This example demonstrates fetching a single user from a mock API endpoint using MSW.</p>
        {error && <p className="text-red-500">Error: {error}</p>}
        {user ? (
          <div className="bg-muted p-4 rounded-md border border-border">
            <h3 className="text-lg font-medium mb-3 text-foreground">User Profile</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <p className="text-gray-500 w-20">ID:</p>
                <p className="font-medium">{user.id}</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-500 w-20">Name:</p>
                <p className="font-medium">{user.firstName} {user.lastName}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-32 bg-muted rounded-md border border-border">
            <p className="text-gray-500">Loading user data...</p>
          </div>
        )}
      </section>

      <section className="space-y-6 bg-card p-6 rounded-lg shadow-xs border border-border">
        <h2 className="text-2xl font-semibold border-b border-border pb-2 text-foreground">Data Table with Mock API</h2>
        <p className="text-gray-600">This example shows how to fetch and display a collection of users from a mock API endpoint.</p>
        {error && <p className="text-red-500">Error: {error}</p>}
        {loading ? (
          <div className="flex items-center justify-center h-32 bg-muted rounded-md border border-border">
            <p className="text-gray-500">Loading users data...</p>
          </div>
        ) : (
          <div className="rounded-md overflow-hidden border border-border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Role</th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-muted/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${
                          user.role === 'admin'
                            ? 'bg-muted text-primary border-border'
                            : 'bg-muted text-foreground border-border'
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default ExamplesPage;
