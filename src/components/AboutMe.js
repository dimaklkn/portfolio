import React from "react";

import dima2 from "../images/dima.jpg";

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Обо мне</h2>
      <p className="section__subtitle section__subtitle--about">
        Developer from Ivanovo, Russia
      </p>
      <div className="about-me__body">
        <p>
          Мне нравится как многие, на вид простые приложения могут иметь "под
          капотом" сложную логику или структуру, и в тоже время то, что кажется
          очень сложным, может иметь простое и элегантное решение. Я люблю
          учиться, я люблю когда то, что ты планировал и долго делал, наконец,
          готово.
        </p>
        <p>
          У меня нет опыта коммерческой разработки, мой опыт это проекты для
          себя и друзей. Сейчас я в поисках возможности стать профессионалом в
          IT, и ищу компанию, в которой я мог бы работать и развиваться.
        </p>
      </div>
      <img src={dima2} alt="" className="about-me__img" />
    </section>
  );
};

export default AboutMe;
