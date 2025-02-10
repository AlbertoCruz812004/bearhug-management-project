import { ReactNode } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { ThemeContext } from "./ThemeContext";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme: isDarkMode, toggleTheme: toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
