import React from "react";
import { Link } from "react-router-dom";
// import components
import ProjectDescription from "../components/ProjectDescription";

const Project = () => {
  return (
    <div className="project">
      <ProjectDescription />
      <div className="project__btn-container">
        <Link to="/" className="btn">
          Назад
        </Link>
      </div>
    </div>
  );
};

export default Project;
