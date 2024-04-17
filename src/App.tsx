import React, { useState } from "react";
import { ThemeContext } from "./themeContext";
import { Header } from "./components/header";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Your application components */}
      <Header></Header>
    </ThemeContext.Provider>
  );
}

export default App;
