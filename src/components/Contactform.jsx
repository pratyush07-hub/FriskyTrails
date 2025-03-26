import React, { useState } from "react";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div className="bg-white h-[66vh] w-[36vw] mt-4 m-auto rounded-lg shadow-lg">
      
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 px-4 pt-10 h-32 rounded-lg items-center"
      >
        {/* Name*/}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pr-48 py-3 border pl-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        </div>
        {/* Mobile no.*/}
        <div>
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            pattern="[6-9]{1}[0-9]{9}"
            maxLength="10"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full pr-48 py-3 border pl-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            
          />
        </div>
        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full pr-48 py-3 border pl-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Write a Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full pr-52 py-3 border pl-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            required
          ></textarea>
        </div>
       
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400 hover:scale-95 ative:scale-90 transition-transform duration-150 py-4 px-40 text-white rounded-full font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contactform;
