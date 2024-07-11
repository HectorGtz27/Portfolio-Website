import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Certifications from "../components/Certifications/Certifications";
import Contact from "../components/Contact/Contact";

import styles from "./MainScreen.module.css";

function MainScreen() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default MainScreen;
