import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

export const Header = () => {
  const { theme } = useContext(ThemeContext) || { theme: "light" }; // Default to light theme
  console.log("theme: ", theme);

  return (
    <div className={`${theme}-bg-color bg-gray-200 dark:bg-gray-800`}>
      Where in the World?
    </div>
  );
};
