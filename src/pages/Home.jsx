import React from "react";
import Cards from "../sections/Cards";
import About from "../sections/About";
import Scroll from "../sections/Scroll";
import Categories from "../sections/Categories";
import Banner from "../sections/Banner";
import Landing from "../sections/Landing";
import Next from "../sections/Next";
import Feedback from "../sections/Feedback";
import End from "../sections/End";

const Home = () => {

  return (
    <>
      <Landing />
      <About />
      <Scroll />
      <Categories />
      <Banner />
      <Cards />
      <Next />
      <Feedback />
      {/* <End /> */}
    </>
  );
};


export default Home;
