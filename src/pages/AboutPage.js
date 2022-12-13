import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutMain from "../components/Main/AboutMain";

function About() {
  return (
    <>
      <Header path="/about"></Header>
      <AboutMain></AboutMain>
      <Footer></Footer>
    </>
  );
}

export default About;
