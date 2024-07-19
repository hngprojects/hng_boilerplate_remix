import { createContext, useContext, useState, ReactNode } from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext({} as ThemeContextType);

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState<true | false>(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
