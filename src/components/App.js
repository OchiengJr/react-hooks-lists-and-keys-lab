import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
  const { name, city, color, bio, links, projects } = user;

  return (
    <div>
      <NavBar />
      <Home username={name} city={city} color={color} />
      <About bio={bio} links={links} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
