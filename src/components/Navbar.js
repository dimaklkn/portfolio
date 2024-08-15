import React, { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <header className="header">
      <p className="logo">&#8249;dimaKlkn/&#8250;</p>

      <button
        className={navOpen ? "nav-toggle nav-toggled" : "nav-toggle"}
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span
          className={navOpen ? "hamburger hamburger-toggled" : "hamburger"}
        ></span>
      </button>
      <nav className={navOpen ? "nav nav-open" : "nav"}>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={toggleNav}>
              Домой
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link" onClick={toggleNav}>
              Скиллы
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={toggleNav}>
              Обо мне
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link" onClick={toggleNav}>
              Мои работы
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
