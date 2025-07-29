import Cards from "../sections/Cards";
import About from "../sections/About";
import Scroll from "../sections/Scroll";
import Categories from "../sections/Categories";
import Banner from "../sections/Banner";
import Landing from "../sections/Landing";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Next from "../sections/Next";
// import Feedback from "../sections/Feedback";
import Choose from "../sections/Choose";
// import Rewards from "../sections/Rewards";
// import Blogs from "../sections/Blogs";

const Home = () => {
  return (
    <>
      {/* <div className="w-full overflow-x-hidden relative">
        <div className="absolute top-0 left-0 w-full z-20">
          <Header />
          <Navbar />
        </div> */}
        <Landing />
        {/* <About /> */}
        {/* <Scroll /> */}
        <Categories />
        <Banner />
        <Cards />
        <Next />
        <Choose />
        {/* <Blogs /> */}
        {/* <Rewards /> */}
        {/* <Feedback /> */}
      {/* </div> */}
    </>
  );
};

export default Home;
