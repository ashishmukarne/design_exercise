import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./themeContext";
import { Header } from "./components/header";
import { CountryDashboard } from "./components/CountryDashboard";
import { CountryDetailCard } from "./components/CountryDetailCard";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

 
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header toggleTheme={toggleTheme}></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CountryDashboard />}></Route>
            <Route path="/detail" element={<CountryDetailCard />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
