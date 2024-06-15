import { useTheme } from 'next-themes';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import { useEffect, useState } from 'react';

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
        <Brightness2Icon
          className="h-6 w-6 dark:text-gray-300 animate-slideInFromTop"
          onClick={() => setTheme('dark')}
          aria-label="Toggle Dark Mode"
        />
      ) : (
        <WbSunnyIcon
          className="h-6 w-6 text-yellow-500 animate-slideInFromTop"
          onClick={() => setTheme('light')}
          aria-label="Toggle Light Mode"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
