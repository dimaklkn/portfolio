import React from "react";
// import components
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Services from "../components/Services";
import AboutMe from "../components/AboutMe";
import MyWork from "../components/MyWork";

const Home = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <Services />
      <AboutMe />
      <MyWork />
    </>
  );
};

export default Home;
