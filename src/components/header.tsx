import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { DarkMoonIcon, WhiteMoonIcon } from "../icons/arrow";

type HeaderProps = {
  toggleTheme: () => any;
};
export const Header = (props: HeaderProps) => {
  const { theme } = useContext(ThemeContext) || { theme: "light" }; // Default to light theme
  return (
    <div
      className={`${theme}-bg-color shadow-2xl font-sans ${theme}-light-bg pb-10 pl-24 text-left`}
    >
      <div className="grid grid-cols-4 gap-4 ">
        <div
          className={`font-sans inline-block text-center font-bold ${theme}-text align-middle pt-9 `}
        >
          Where in the World?
        </div>

        <div className="col-span-2 ml-96"></div>
        <div
          className="col-span-1 cursor-pointer ml-24 mt-4"
          onClick={props?.toggleTheme}
        >
          {theme === "light" ? <DarkMoonIcon /> : <WhiteMoonIcon />}
        </div>
      </div>
    </div>
  );
};
