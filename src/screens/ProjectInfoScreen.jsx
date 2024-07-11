import React from "react";
import { useLocation, Link } from "react-router-dom";

function ProjectInfoScreen() {
  const location = useLocation();
  const message = location.state?.message || "No message";
  return (
    <div>
      <h2>Project Info Screen</h2>
      <p>{message}</p>
      <Link to="/">
        <div>Go Back</div>
      </Link>
    </div>
  );
}

export default ProjectInfoScreen;
