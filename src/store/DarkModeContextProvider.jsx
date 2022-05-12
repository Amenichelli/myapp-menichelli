import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext({});

export const useDarkModeContext = () => useContext(DarkModeContext);

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.querySelector("body").className = darkMode
      ? "bg-light"
      : "bg-dark";
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;