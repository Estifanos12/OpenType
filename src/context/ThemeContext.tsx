import { createContext } from 'react';

import { useTheme } from '../hooks/useTheme';

type ThemeContextType = ReturnType<typeof useTheme>;

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { systemTheme, setTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ systemTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
