import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const ProjectPreview = (props) => {
  const { image, title, text, id, projectLink, page } = props;
  const { setDescription, setTitle, setPicture, setProjectLink } =
    useGlobalContext();
  return (
    <Link
      to={`/${page}/${id}`}
      className="portfolio__item"
      onClick={() => {
        setDescription(text);
        setTitle(title);
        setPicture(image);
        setProjectLink(projectLink);
      }}
    >
      <img src={image} alt={title} className="portfolio__img" />
    </Link>
  );
};

export default ProjectPreview;
