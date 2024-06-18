import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="cursor-pointer p-2 hover:bg-yellow-500 dark:hover:bg-gray-700 rounded-full transition-all duration-300 ease-in-out">
      {theme === 'light' ? (
        <Moon
          className="h-6 w-6 dark:text-gray-300 animate-slideInFromTop"
          onClick={() => setTheme('dark')}
          aria-label="Toggle Dark Mode"
        />
      ) : (
        <Sun
          className="h-6 w-6 text-yellow-500 animate-slideInFromTop"
          onClick={() => setTheme('light')}
          aria-label="Toggle Light Mode"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
