import { http, HttpResponse, delay } from 'msw';

/**
 * Example data type
 */
export interface ExampleUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

/**
 * Example API response data
 */
const users: ExampleUser[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user' },
  { id: 3, name: 'Carol Williams', email: 'carol@example.com', role: 'user' },
];

/**
 * Example MSW handlers for mocking API endpoints
 * 
 * These demonstrate how to:
 * - Create GET, POST, PUT, DELETE handlers
 * - Return JSON responses
 * - Handle path parameters
 * - Simulate network delay
 * - Return error responses
 */
export const exampleHandlers = [
  // GET all users
  http.get('/api/users', async () => {
    // Simulate network delay
    await delay(300);
    
    return HttpResponse.json(users);
  }),
  
  // GET a specific user
  http.get('/api/users/:id', async ({ params }) => {
    await delay(200);
    
    const id = Number(params.id);
    const user = users.find(u => u.id === id);
    
    if (!user) {
      return new HttpResponse(null, { 
        status: 404,
        statusText: 'User not found' 
      });
    }
    
    return HttpResponse.json(user);
  }),
  
  // POST to create a new user
  http.post('/api/users', async ({ request }) => {
    await delay(500);
    
    const newUser = await request.json() as Omit<ExampleUser, 'id'>;
    
    // Validate required fields
    if (!newUser.name || !newUser.email) {
      return new HttpResponse(null, { 
        status: 400,
        statusText: 'Name and email are required' 
      });
    }
    
    // Create new user with generated ID
    const createdUser: ExampleUser = {
      ...newUser,
      id: users.length + 1,
      role: newUser.role || 'user',
    };
    
    // In a real handler, you would add to the users array
    // users.push(createdUser);
    
    return HttpResponse.json(createdUser, { status: 201 });
  }),
  
  // PUT to update a user
  http.put('/api/users/:id', async ({ params, request }) => {
    await delay(300);
    
    const id = Number(params.id);
    const userData = await request.json() as Partial<ExampleUser>;
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
      return new HttpResponse(null, { 
        status: 404,
        statusText: 'User not found' 
      });
    }
    
    // In a real handler, you would update the user
    // users[userIndex] = { ...users[userIndex], ...userData };
    
    return HttpResponse.json({ ...users[userIndex], ...userData });
  }),
  
  // DELETE a user
  http.delete('/api/users/:id', async ({ params }) => {
    await delay(300);
    
    const id = Number(params.id);
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
      return new HttpResponse(null, { 
        status: 404,
        statusText: 'User not found' 
      });
    }
    
    // In a real handler, you would remove the user
    // users.splice(userIndex, 1);
    
    return new HttpResponse(null, { status: 204 });
  }),
];

export default exampleHandlers;
