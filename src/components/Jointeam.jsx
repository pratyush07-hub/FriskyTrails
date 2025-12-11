import { useState } from "react";

const Jointeam = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    mobile: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Resume File:", formData.resume);

    setFormData({
      name: "",
      email: "",
      position: "",
      mobile: "",
      resume: null,
      message: "",
    });

    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full gap-4"
    >
      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Your Name*"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
        required
      />

      {/* Mobile */}
      <input
        type="tel"
        name="mobile"
        placeholder="Your Mobile Number*"
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
        placeholder="Email Address*"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
        required
      />

      {/* Position */}
      <div>
        <label className="text-gray-600 text-sm pl-2 mb-1 block">
          Position Applying For*
        </label>
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          required
        >
          <option value="" disabled>
            Select a position
          </option>
          <option value="Software Engineer / Senior Software Engineer">
            Software Engineer / Senior Software Engineer
          </option>
          <option value="Graphic Designer">Graphic Designer</option>
          <option value="Social Media">Social Media</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Travel Executive / Travel Consultant">
            Travel Executive / Travel Consultant
          </option>
        </select>
      </div>

      {/* Resume */}
      <div>
        <label className="text-gray-600 text-sm pl-2 mb-1 block">
          Attach Resume (PDF/DOC)*
        </label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-100 file:text-amber-700 hover:file:bg-amber-200"
          required
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Add a cover letter here"
        value={formData.message}
        onChange={handleChange}
        className="w-full h-32 sm:h-36 md:h-40 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 hover:scale-95 active:scale-90 transition-transform duration-150 py-4 text-white rounded-full font-semibold text-lg sm:text-xl"
      >
        Submit
      </button>
    </form>
  );
};

export default Jointeam;
