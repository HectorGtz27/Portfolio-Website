import React from "react";
import { useLocation, Link } from "react-router-dom";
import projects from "../data/projects.json";
import { ProjectCard } from "../components/Projects/ProjectCard";

function ProjectInfoScreen() {
  const location = useLocation();
  const message = location.state?.message || "No message";

  const filterProjects = projects.filter((project) =>
    project.Area.includes(message)
  );
  return (
    <div>
      <h2>Project Info Screen</h2>
      <p>{message}</p>
      <Link to="/">
        <div>Go Back</div>
      </Link>
      <div>
        {filterProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectInfoScreen;
