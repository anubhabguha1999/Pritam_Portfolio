import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home, Blog, Project, About } from "./Components/pages";

function App() {
  return (
    <div className="App">
      <Navbar title='Pritam Guha' blog_title='Blog' project_title="Projects" about_title="About"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
