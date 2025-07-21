import { useState } from "react";
import Right from "../assets/right.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import Blogleft from "../components/Blogleft";
import Blogright from "../components/Blogright";

const Newblog = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    duration: "",
    budget: "",
    date: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      from: "",
      to: "",
      duration: "",
      budget: "",
      date: "",
      guests: "",
    });
  };

  return (
    <div className="min-h-screen w-full">
      <div
        style={{
          maxWidth: "100vw",
          backgroundImage: "url('/images/bgbanner.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "460px",
        }}
      >
        <div className="flex items-center pl-50 pt-6">
          <h3 className="font-semibold">Home</h3>
          <img className="h-4 w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold">Destination</h3>
          <img className="h-4 w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold text-gray-600">Chennai</h3>
        </div>
        <h1 className="text-4xl font-semibold tracking-tighter pl-50 pt-4">
          Places to see in Chennai
        </h1>
        <img
          className="m-auto rounded-2xl mt-6"
          src="/images/filters.webp"
          alt="image"
        />

        <div className="bg-white h-[28vh] w-[90vw] rounded-lg mt-6 m-auto shadow-lg">
          <div className="grid grid-cols-3 text-xl pt-4 font-semibold">
            <h1 className="text-center border-1 py-4 border-gray-300">
              Holidays
            </h1>
            <h1 className="text-center border-1 py-4 border-gray-300">
              Adventures
            </h1>
            <h1 className="text-center border-1 py-4 border-gray-300">
              Hotels
            </h1>
          </div>
          {/* <div className="border-1 border-gray-300 mt-4"></div> */}
          <form
            onSubmit={handleSubmit}
            className="flex gap-10 m-auto justify-center w-[98%] px-4 h-32 rounded-lg items-center"
          >
            {/* From Location */}
            <div>
              <label className="block font-semibold pl-1 mb-1">From City</label>
              <input
                type="text"
                name="from"
                placeholder="Enter location"
                value={formData.from}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            {/* To Location */}
            <div>
              <label className="block font-semibold pl-1 mb-1">To City</label>
              <input
                type="text"
                name="to"
                placeholder="Enter destination"
                value={formData.to}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block font-semibold pl-1 mb-1">
                Duration (in Days)
              </label>
              <input
                type="number"
                name="duration"
                placeholder="Enter duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block font-semibold pl-1 mb-1">
                Budget (in ₹)
              </label>
              <input
                type="number"
                name="budget"
                placeholder="Enter amount"
                value={formData.budget}
                min="0"
                step="1000"
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            {/* Date */}
            <div>
              <label className="block font-semibold pl-1 mb-1">
                Departure Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            {/* Guests */}
            <div>
              <label className="block font-semibold pl-1 mb-1">
                No. of Guests
              </label>
              <input
                type="number"
                name="guests"
                placeholder="No. of persons"
                value={formData.guests}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 hover:scale-95 mt-7 py-3 px-6 text-white rounded-xl font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="h-screen w-full pt-10 flex">
          <div className="w-[15%] sticky top-0">
            <div className="flex pl-10 pt-10 gap-4">
              <a href="https://www.facebook.com/friskytrails/" target="_blank">
                <img className="w-10 h-10 object-cover" src={Facebook} alt="" />
              </a>
              <a href="https://x.com/frisky_trails" target="_blank">
                <img className="w-10 h-10 object-cover" src={Twitter} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/friskytrails/"
                target="_blank"
              >
                <img className="w-10 h-10 object-cover" src={Linkedin} alt="" />
              </a>
              <a href="https://www.instagram.com/friskytrails/" target="_blank">
                <img
                  className="w-10 h-10 object-cover"
                  src={Instagram}
                  alt=""
                />
              </a>
            </div>

            <div className="h-[78vh] w-[12vw] mt-4 ml-10 drop-shadow bg-[url('/blogimages/blogbanner.png')] bg-cover bg-center" />
          </div>
          <div className="w-[55%] pl-20 overflow-y-auto custom-scrollbar">
            <Blogleft />
          </div>
          <div className="w-[30%] sticky top-0">
            <Blogright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newblog;
