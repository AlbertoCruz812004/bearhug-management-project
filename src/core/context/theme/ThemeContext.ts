import { createContext, useContext } from "react";

interface Props {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<Props | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
