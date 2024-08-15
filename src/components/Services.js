import React from "react";

const Services = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">Что я умею</h2>
      <div className="services">
        <div className="service">
          <h3>Frontend</h3>
          <p>CSS, SCSS and JavaScript, React</p>
        </div>

        <div className="service">
          <h3>Backend</h3>
          <p>
            Пробные проекты с MongoDB, <br />
            Mongoose, Express.js, Node.js.
          </p>
        </div>

        <div className="service">
          <h3>Other</h3>
          <p>
            Английский - свободно владею.
            <br /> Умею работать в команде
          </p>
        </div>
      </div>

      <a href="#work" className="btn">
        Мои работы
      </a>
    </section>
  );
};

export default Services;
