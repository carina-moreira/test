import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

/**
 * Theme provider component to manage theme state and toggle between light and dark mode.
 *
 * @param {Object} children - The children components to be wrapped by the ThemeProvider.
 * @return {JSX.Element} The JSX element containing the ThemeContext Provider with theme state and toggle function.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-mode");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  /**
   * Toggle the theme between light and dark mode.
   */
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-mode" ? "dark-mode" : "light-mode"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
