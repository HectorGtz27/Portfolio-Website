import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/hectorcartoon.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Tech Enthusiast</h3>
              <p>
                As a computer science engineer, I am deeply passionate about
                technology, with a strong focus on Web Development and Machine
                Learning. I thrive on exploring the latest advancements and
                applying them to real-world challenges.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Innovative Problem Solver</h3>
              <p>
                My engineering background equips me to excel in solving
                intricate problems through innovative and creative approaches. I
                relish the opportunity to analyze complex issues and devise
                efficient solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Baseball Enthusiast</h3>
              <p>
                Beyond my professional pursuits, I have a deep love for
                baseball. When I'm not coding or tackling tech challenges, you
                can often find me enjoying baseball games, savoring the
                excitement of every match.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
