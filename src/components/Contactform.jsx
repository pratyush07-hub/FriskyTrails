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
    <div className="bg-white w-[90vw] h-[70vh] md:w-[36vw] mt-2 m-auto flex justify-center items-center rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="flex flex-col w-[26vw] gap-6">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />

          {/* Mobile */}
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            pattern="[6-9]{1}[0-9]{9}"
            maxLength="10"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* Text Area */}
          <textarea
            name="message"
            placeholder="Write a Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-34 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 leading-relaxed text-lg resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400 hover:scale-95 active:scale-90 transition-transform duration-150 py-4 text-white rounded-full font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
  );
};

export default Contactform;
