import React from "react";
import { useLocation, Link } from "react-router-dom";
import projects from "../data/projects.json";
import { ProjectCard } from "../components/Projects/ProjectCard";
import styles from "./ProjectInfoScreen.module.css";
import { FaAngleLeft } from "react-icons/fa";

function ProjectInfoScreen() {
  const location = useLocation();
  const message = location.state?.message || "No message";

  const filterProjects = projects.filter((project) =>
    project.Area.includes(message)
  );
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>{message} Projects</h2>
          <Link to="/" className={styles.goBack}>
            <div className={styles.rightHeader}>
              <FaAngleLeft size={32} />
              <p>Back</p>
            </div>
          </Link>
        </div>

        <div className={styles.projects}>
          {filterProjects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectInfoScreen;
