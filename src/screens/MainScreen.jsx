import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Certifications from "../components/Certifications/Certifications";
import Contact from "../components/Contact/Contact";
import { Link } from "react-router-dom";
import styles from "./MainScreen.module.css";

function MainScreen() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Link to="/projects-info">
        <div>Ir a Projects Info</div>
      </Link>
      <Certifications />
      <Contact />
    </div>
  );
}

export default MainScreen;
