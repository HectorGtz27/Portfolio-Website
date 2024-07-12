import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { FaAward } from "react-icons/fa";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, accolades },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>
      {accolades && (
        <div className={styles.accoladesContainer}>
          <FaAward size={30} />
          <p className={styles.accoladesText}>{accolades}</p>
        </div>
      )}
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a target="_blank" href={demo} className={styles.link}>
          Demo
        </a>
        <a target="_blank" href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
