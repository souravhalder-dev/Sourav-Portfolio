import React from "react";
import Hero from "../../App";
import About from "../About/About";
import Skills from "../Teach/Skills";
import Contact from "../Contact/Contact";



const Home = () => {
  return (
    <div id="home">
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Home;
