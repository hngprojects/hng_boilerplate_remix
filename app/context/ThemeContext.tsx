import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

type ThemeProviderProperties = {
  children: ReactNode;
};

const ThemeContext = createContext({} as ThemeContextType);

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: ThemeProviderProperties) {
  const [isDark, setIsDark] = useState<true | false>(false);

  const toggleTheme = () => {
    setIsDark((previous) => !previous);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
