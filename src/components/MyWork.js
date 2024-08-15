import React from "react";
import projectsData from "../data";
import ProjectPreview from "./ProjectPreview";

const MyWork = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">Мои работы</h2>
      <p className="section__subtitle section__subtitle--work">
        Мои проекты собраны здесь
      </p>
      <div className="portfolio">
        {projectsData.map((card) => {
          return <ProjectPreview {...card} key={card.id} page="projects" />;
        })}
      </div>
    </section>
  );
};

export default MyWork;
