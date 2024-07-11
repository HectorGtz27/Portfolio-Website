import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hector Gutierrez</h1>
        <p className={styles.description}>
          I'm a passionate Computer Science student at Tecnológico de Monterrey,
          Campus Sonora Norte. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:alan.gtz51@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hectorgtz.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
