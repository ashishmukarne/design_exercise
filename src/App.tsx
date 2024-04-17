import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./themeContext";
import { Header } from "./components/header";
import { CountryDashboard } from "./components/CountryDashboard";
import { CountryDetailCard } from "./components/CountryDetailCard";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CountryDashboard />}></Route>
            <Route
              path="/detail"
              element={
                <CountryDetailCard/>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
