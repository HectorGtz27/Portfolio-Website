import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Link to="/projects-info" state={{ message: "Web Development" }}>
        <div>
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
        <div>
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
        <div>
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
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
