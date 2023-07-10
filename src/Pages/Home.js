import React from "react";
import Profile from '/Users/ananyagoel/portfolio-app/src/Components/Profile.js';
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
export default function Home() {
    return (
        <div>
          <section id="home">
            <Profile />
          </section>
    
          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>
        </div>
      );
}
