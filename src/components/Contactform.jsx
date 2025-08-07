import { useState } from "react";
import { contactUs } from "../api/contact.api";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await contactUs({ name: formData.name, email: formData.email, mobile: formData.mobile, message: formData.message });
      if (response.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    }catch (error) {
      alert(error.response?.data?.message || "An error occurred while sending the message.");
    }
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div className="bg-white w-full max-w-[90vw] sm:max-w-[500px] md:max-w-[600px] lg:w-[36vw] h-auto mt-4 m-auto flex justify-center items-center rounded-lg shadow-lg px-4 sm:px-6 py-4 sm:py-6 md:px-6 md:py-8">
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5 sm:gap-6">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-base"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-base"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-base"
        />

        {/* Text Area */}
        <textarea
          name="message"
          placeholder="Write a Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 leading-relaxed text-base resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 hover:scale-95 active:scale-90 transition-transform duration-150 py-3 text-white rounded-full font-semibold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contactform;
