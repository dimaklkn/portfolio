import React from "react";

import { useGlobalContext } from "../context";

const ProjectDescription = () => {
  const { picture, title, description, projectLink } = useGlobalContext();
  return (
    <section className="about-me">
      <h2 className="section__title section__title--about">{title}</h2>
      <p className="section__subtitle section__subtitle--about">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project__link"
        >
          посмотреть
        </a>
      </p>
      <div className="about-me__body">
        <p>{description}</p>
      </div>
      <img src={picture} alt="" className="about-me__img" />
    </section>
  );
};

export default ProjectDescription;
