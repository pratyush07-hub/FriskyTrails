import React, { useState } from 'react';

const Form = () => {
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
  };

  return (
    <div className="bg-white h-[28vh] w-[90vw] rounded-lg z-20 absolute bottom-40 left-1/2 transform -translate-x-1/2 shadow-lg">
      <h2 className="text-2xl font-bold pt-4 text-center">Enter Your Dream Destination</h2>
      <form onSubmit={handleSubmit} className="flex gap-12 m-auto justify-center w-[98%] px-4 border-gray-300 h-32 rounded-lg border-2 items-center">
        {/* From Location */}
        <div>
          <label className="block font-semibold pl-1 mb-1">From City</label>
          <input
            type="text"
            name="from"
            placeholder="Enter location"
            value={formData.from}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block font-semibold pl-1 mb-1">Duration (in Days)</label>
          <input
            type="number"
            name="duration"
            placeholder="Enter duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block font-semibold pl-1 mb-1">Budget (in ₹)</label>
          <input
            type="number"
            name="budget"
            placeholder="Enter amount"
            value={formData.budget}
            min="0"
            step="1000"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        {/* Date */}
        <div>
          <label className="block font-semibold pl-1 mb-1">Departure Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        {/* Guests */}
        <div>
          <label className="block font-semibold pl-1 mb-1">No. of Guests</label>
          <input
            type="number"
            name="guests"
            placeholder="No. of persons"
            value={formData.guests}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className=" bg-blue-500 mt-7 py-3 px-6 hover:bg-blue-600 text-white rounded-xl font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
