import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";
import { FiArrowUpRight } from "react-icons/fi";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.gridContainer}>
        <Link
          className={styles.link}
          to="/projects-info"
          state={{ message: "Web Development" }}
        >
          <div className={`${styles.gridItem} ${styles.item1}`}>
            <div className={styles.gridItemContent}>
              <div className={styles.topCardContainer}>
                <p className={styles.number}>1</p>
              </div>

              <div className={styles.bottomCard}>
                <div className={styles.sectionDescription}>
                  <p className={styles.sectionTitle}>Web Development</p>
                  <p className={styles.sectioSubtitle}>Info</p>
                </div>
                <FiArrowUpRight size={62} />
              </div>
            </div>
          </div>
        </Link>
        <Link
          className={styles.link}
          to="/projects-info"
          state={{ message: "Machine Learning" }}
        >
          <div className={`${styles.gridItem} ${styles.item2}`}>
            <div className={styles.gridItemContent}>
              <div className={styles.topCardContainer}>
                <p className={styles.number}>2</p>
              </div>

              <div className={styles.bottomCard}>
                <div className={styles.sectionDescription}>
                  <p className={styles.sectionTitle}>Machine Learning</p>
                  <p className={styles.sectioSubtitle}>Info</p>
                </div>
                <FiArrowUpRight size={62} />
              </div>
            </div>
          </div>
        </Link>
        <Link
          className={styles.link}
          to="/projects-info"
          state={{ message: "IoT" }}
        >
          <div className={`${styles.gridItem} ${styles.item3}`}>
            <div className={styles.gridItemContent}>
              <div className={styles.topCardContainer}>
                <p className={styles.number}>3</p>
              </div>

              <div className={styles.bottomCard}>
                <div className={styles.sectionDescription}>
                  <p className={styles.sectionTitle}>IoT</p>
                  <p className={styles.sectioSubtitle}>Info</p>
                </div>
                <FiArrowUpRight size={62} />
              </div>
            </div>
          </div>
        </Link>
        <Link
          className={styles.link}
          to="/projects-info"
          state={{ message: "Object Oriented Programming" }}
        >
          <div className={`${styles.gridItem} ${styles.item4}`}>
            <div className={styles.gridItemContent}>
              <div className={styles.topCardContainer}>
                <p className={styles.number}>4</p>
              </div>

              <div className={styles.bottomCard}>
                <div className={styles.sectionDescription}>
                  <p className={styles.sectionTitle}>Object Oriented</p>
                  <p className={styles.sectioSubtitle}>Info</p>
                </div>
                <FiArrowUpRight size={62} />
              </div>
            </div>
          </div>
        </Link>
        <Link
          className={styles.link}
          to="/projects-info"
          state={{ message: "Game Development" }}
        >
          <div className={`${styles.gridItem} ${styles.item5}`}>
            <div className={styles.gridItemContent}>
              <div className={styles.topCardContainer}>
                <p className={styles.number}>5</p>
              </div>

              <div className={styles.bottomCard}>
                <div className={styles.sectionDescription}>
                  <p className={styles.sectionTitle}>Game Development</p>
                  <p className={styles.sectioSubtitle}>Info</p>
                </div>
                <FiArrowUpRight size={62} />
              </div>
            </div>
          </div>
        </Link>
        <Link
          className={styles.link}
          to="/projects-info"
          state={{ message: "Other" }}
        >
          <div className={`${styles.gridItem} ${styles.item6}`}>
            <div className={styles.gridItemContent}>
              <div className={styles.topCardContainer}>
                <p className={styles.number}>6</p>
              </div>

              <div className={styles.bottomCard}>
                <div className={styles.sectionDescription}>
                  <p className={styles.sectionTitle}>Other</p>
                  <p className={styles.sectioSubtitle}>Info</p>
                </div>
                <FiArrowUpRight size={62} />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div> */}
    </section>
  );
}

export default Projects;
