import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const colors = {
    light: {
      whiteColor: "#ffffff",
      secondaryColor: "#6c757d",
      backgroundColor: "#2a56c9",
    },
    dark: {
      primaryColor: "#ff0000",
      secondaryColor: "#00ff00",
      backgroundColor: "#333333",
    },
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkTheme
      ? colors.dark.backgroundColor
      : colors.light.backgroundColor;
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
