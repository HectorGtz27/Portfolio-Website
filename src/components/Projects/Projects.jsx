import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.gridContainer}>
        <Link to="/projects-info" state={{ message: "Web Development" }}>
          <div className={styles.gridItem}>
            <p>1</p>
            <div>
              <div>
                <p>Web Development</p>
                <p>Info</p>
              </div>
              <div>+</div>
            </div>
          </div>
        </Link>
        <Link to="/projects-info" state={{ message: "Machine Learning" }}>
          <div className={styles.gridItem}>
            <p>2</p>
            <div>
              <div>
                <p>AI</p>
                <p>Info</p>
              </div>
              <div>+</div>
            </div>
          </div>
        </Link>
        <Link to="/projects-info" state={{ message: "IoT" }}>
          <div className={styles.gridItem}>
            <p>3</p>
            <div>
              <div>
                <p>IoT</p>
                <p>Info</p>
              </div>
              <div>+</div>
            </div>
          </div>
        </Link>
        <Link
          to="/projects-info"
          state={{ message: "Object Oriented Programming" }}
        >
          <div className={styles.gridItem}>
            <p>4</p>
            <div>
              <div>
                <p>Object Oriented Programming</p>
                <p>Info</p>
              </div>
              <div>+</div>
            </div>
          </div>
        </Link>
        <Link to="/projects-info" state={{ message: "Game Development" }}>
          <div className={styles.gridItem}>
            <p>5</p>
            <div>
              <div>
                <p>Game Development</p>
                <p>Info</p>
              </div>
              <div>+</div>
            </div>
          </div>
        </Link>
        <Link to="/projects-info" state={{ message: "Other" }}>
          <div className={styles.gridItem}>
            <p>6</p>
            <div>
              <div>
                <p>Other</p>
                <p>Info</p>
              </div>
              <div>+</div>
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
