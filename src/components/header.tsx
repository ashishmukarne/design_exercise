import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

export const Header = () => {
  const { theme } = useContext(ThemeContext) || { theme: "light" }; // Default to light theme
  console.log("theme: ", theme);

  return (
    <div
      className={`${theme}-bg-color font-sans dark:bg-gray-800 pb-10 pl-24 text-left`}
    >
      <div className="grid grid-cols-4 gap-4">
        <div className="font-sans inline-block text-center font-bold text-white align-middle pt-9 ">
          Where in the World?
        </div>
      </div>
    </div>
  );
};
