import React from "react";
import dima from "../images/dima1.jpg";

const Introduction = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Привет, я <strong>Дима Клюкин</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end dev
      </p>
      <img src={dima} alt="dima" className="intro__img" />
    </section>
  );
};

export default Introduction;
