import { useState } from 'react';

/**
 * Example component props
 */
interface ExampleComponentProps {
  /** The title to display */
  title: string;
  /** Optional description */
  description?: string;
  /** Optional CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Example component that demonstrates:
 * - TypeScript props with JSDoc comments
 * - Tailwind CSS styling
 * - React hooks (useState)
 * - Conditional rendering
 */
export function ExampleComponent({
  title,
  description,
  className = '',
  onClick,
}: ExampleComponentProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    if (onClick) onClick();
  };

  return (
    <div 
      className={`p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col space-y-4 ${className}`}
    >
      <h2 className="text-xl font-medium text-black">{title}</h2>
      
      {description && (
        <p className="text-slate-500">{description}</p>
      )}
      
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">
          Count: {count}
        </span>
        
        <button
          onClick={handleClick}
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default ExampleComponent;
