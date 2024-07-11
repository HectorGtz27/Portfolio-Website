import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:alan.gtz51@gmail.com" target="_blank">
              alan.gtz51@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/in/hector-guti%C3%A9rrez-941a2521a/"
              target="_blank"
            >
              linkedin/hectorgutiérrez
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a href="https://github.com/HectorGtz27" target="_blank">
              github.com/HectorGtz27
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Contact;
