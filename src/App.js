import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Blog, Project, About, Home } from "./Components/pages";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        title="Pritam Guha"
        blog_title="Blog"
        project_title="Projects"
        about_title="About"
      />
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
