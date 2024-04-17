import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

export const Header = () => {
  const { theme } = useContext(ThemeContext) || { theme: "light" }; // Default to light theme
  return (
    <div
      className={`${theme}-bg-color shadow-2xl font-sans ${theme}-light-bg pb-10 pl-24 text-left`}
    >
      <div className="grid grid-cols-4 gap-4 ">
        <div className={`font-sans inline-block text-center font-bold ${theme}-text align-middle pt-9 `}>
          Where in the World?
        </div>
      </div>
    </div>
  );
};
