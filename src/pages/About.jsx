import React, { useState, useEffect } from "react";
import Jointeam from "../components/Jointeam";
import Form from "../components/Popupform";
import Arrow from "../assets/rightarrow.svg";
import Choose from "../sections/Choose";

const About = () => {
  const [showForm, setShowForm] = useState(false);
  const [showJointeam, setShowJointeam] = useState(false);
  // Toggle function
  const toggleForm = () => setShowForm(!showForm);
  const toggleJointeam = () => setShowJointeam(!showJointeam);
  // Function to close modals on scroll
  const handleScroll = () => {
    setShowForm(false);
    setShowJointeam(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <div className="bg-[url('/images/Indianflag.webp')] bg-cover z-0 bg-center">
      <h1 className="font-bold text-8xl tracking-tight text-center pt-30">
        Explore India With Us
      </h1>
      <div className="w-[42vw] mx-auto flex justify-center">
        <p className="text-center mt-8 text-xl text-black">
          Our mission is to make travel effortless and adventures unforgettable
          for all adventure lovers and travel junkies across the nation.
        </p>
      </div>
      <h1 className="text-4xl font-semibold mt-24 text-[rgb(255,99,33)] text-center">
        What is FriskyTrails?
      </h1>
      <div className="w-[70vw] mx-auto flex justify-center">
        <p className="text-center mt-8 text-xl text-gray-600">
          <b>
            At FriskyTrails, we believe that travel isn’t just about reaching a
            destination—
          </b>
          it’s about the thrill of the journey, the experiences that shape us,
          and the stories we create along the way. Whether you're an adrenaline
          junkie, a nature lover, or someone looking to escape the ordinary, we
          bring you 100+ adventure activities and 500+ tour packages across 200+
          breathtaking locations in India.
        </p>
      </div>
      <div className="flex justify-center pb-10 gap-10">
        <button
          onClick={toggleForm}
          className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 mt-8 border-1 flex gap-1 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 text-white px-8 py-5"
        >
          Our Packages <img className="mt-0.5 invert" src={Arrow} alt="" />
        </button>
        {showForm && <Form onClose={() => setShowForm(false)} />}
        <button className="bg-white mt-8 border-1 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white px-8 py-5">
          <a href="tel:+917501516714">+91-75015 16714</a>
        </button>
      </div>
          </div>
      <div className="mt-10 w-full">
        <h1 className="text-4xl font-semibold mt-24 text-[rgb(255,99,33)] text-center">
          What we promise
        </h1>
        <div className="flex justify-center mt-8 items-center gap-10 grid-cols-3 h-[40vh] w-full">
          <div className="h-[40vh] w-[18vw] rounded-lg shadow-lg">
            <img
              className="h-[14vh] w-[7vw] ml-20 mt-4"
              src="/images/hot.png"
              alt=""
            />
            <h1 className="mt-6 text-xl font-semibold text-center">
              Unmatched Experience
            </h1>
            <p className="text-gray-500 w-[15vw] ml-5 tracking-tighter mt-4 text-center">
              From trekking in the Himalayas to Sky Diving in NCR, we curate
              unique adventures for every traveller.
            </p>
          </div>
          <div className="h-[40vh] w-[18vw] rounded-lg shadow-lg">
            <img
              className="h-[14vh] w-[7vw] ml-20 mt-4"
              src="/images/hot.png"
              alt=""
            />
            <h1 className="mt-6 text-xl font-semibold text-center">
              Trusted Expertise
            </h1>
            <p className="text-gray-500 w-[15vw] ml-5 tracking-tighter mt-4 text-center">
              With 4+ years of experience in the travel industry, we ensure
              safety, quality, and unforgettable moments.
            </p>
          </div>
          <div className="h-[40vh] w-[18vw] rounded-lg shadow-lg">
            <img
              className="h-[14vh] w-[7vw] ml-20 mt-4"
              src="/images/hot.png"
              alt=""
            />
            <h1 className="mt-6 text-xl font-semibold text-center">
              For Every Explorer
            </h1>
            <p className="text-gray-500 w-[15vw] ml-5 tracking-tighter mt-4 text-center">
              Whether you're a solo traveler, a couple, or a group of friends,
              we have something for everyone.
            </p>
          </div>
        </div>
      </div>
      <Choose />
      <h1 className="text-4xl font-semibold mt-24 text-center">
        Let’s Redefine Adventure,{" "}
        <span className="text-4xl text-[rgb(255,99,33)] font-bold mt-24">
          TOGETHER!
        </span>
      </h1>
      <div className="w-[60vw] mx-auto flex justify-center">
        <p className="text-center mt-8 text-xl text-gray-600">
          FriskyTrails isn’t just a career opportunity—it’s a launchpad for bold
          ideas, passionate individuals, and limitless growth. We thrive in a
          fast-paced, dynamic culture where creativity meets adventure. If
          you’re ready to unlock your potential, make an impact, and embark on
          an exciting professional journey, this is your calling! Click the
          button tailored just for you—whether you're drawn to marketing, sales,
          tech, or beyond. Your adventure with FriskyTrails starts now! 🚀
        </p>
      </div>
      <div className="flex justify-center pb-10 gap-10">
        <button
          onClick={toggleJointeam}
          className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 mt-8 border-1 flex gap-1 font-semibold rounded-lg active:scale-90 transition-all duration-300 hover:bg-amber-400 text-white px-6 py-3"
        >
          Join Our Team!
        </button>
        {showJointeam && <Jointeam onClose={() => setShowJointeam(false)} />}
      </div>
    </div>
  );
};

export default About;
