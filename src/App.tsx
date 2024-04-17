import React, { useState } from "react";
import { ThemeContext } from "./themeContext";
import { Header } from "./components/header";
import { CountryDashboard } from "./components/CountryDashboard";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header></Header>
      <CountryDashboard></CountryDashboard>
    </ThemeContext.Provider>
  );
}

export default App;
