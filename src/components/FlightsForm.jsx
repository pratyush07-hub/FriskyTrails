import { useEffect, useState } from "react";
import { adventure } from "../api/adventure.api"; // replace with your actual API

const FlightsForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departure: "",
    returnDate: "",
    travelClass: "",
    guests: "",
  });

  const [showMobileForm, setShowMobileForm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await adventure(formData);
      if (response.success) {
        alert("Flight booked successfully!");
      } else {
        alert("Failed to book flight.");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "An error occurred while booking the flight."
      );
    }
    setFormData({
      from: "",
      to: "",
      departure: "",
      returnDate: "",
      travelClass: "",
      guests: "",
    });
    setShowMobileForm(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileForm(false);
    };
    if (showMobileForm) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMobileForm]);

  const labels = {
    from: "From",
    to: "To",
    departure: "Departure",
    returnDate: "Return (Optional)",
    travelClass: "Class",
    guests: "Guests",
  };

  const placeholders = {
    from: "Enter departure city",
    to: "Enter destination city",
    departure: "Select departure date",
    returnDate: "Select return date",
    travelClass: "Economy, Business...",
    guests: "No. of passengers",
  };

  return (
    <>
      {/* ============ Tablet/Desktop Form ============ */}
      <div className="hidden md:block bg-white h-auto w-[90vw] rounded-lg z-20 absolute bottom-40 lg:bottom-60 xl:bottom-40 left-1/2 transform -translate-x-1/2 shadow-lg px-10 py-4">
        <h2 className="text-2xl text-orange-400 font-bold pb-4 text-center">
          Flights
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-center items-center w-full xl:flex-nowrap xl:gap-10"
        >
          {Object.keys(formData).map((field, index) => (
            <div className="w-full md:w-[30%]" key={index}>
              <label className="block font-semibold mb-1 pl-1">
                {labels[field]}
              </label>
              <input
                type={
                  ["departure", "returnDate"].includes(field)
                    ? "date"
                    : field === "guests"
                    ? "number"
                    : "text"
                }
                name={field}
                placeholder={placeholders[field]}
                value={formData[field]}
                onChange={handleChange}
                min={
                  ["departure", "returnDate"].includes(field)
                    ? new Date().toISOString().split("T")[0]
                    : "0"
                }
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                required={field !== "returnDate"} // return is optional
              />
            </div>
          ))}
          <div className="w-full md:w-auto">
            <button
              type="submit"
              className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 hover:scale-95 py-3 px-6 mt-2 xl:mt-6 text-white rounded-xl font-semibold w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* ============ Mobile Trigger Button ============ */}
      <div className="md:hidden relative text-center bottom-30 z-10">
        <button
          onClick={() => setShowMobileForm(true)}
          className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 hover:bg-amber-400 text-white px-6 py-3 rounded-xl shadow-md font-semibold"
        >
          Open Flights Form
        </button>
      </div>

      {/* ============ Mobile Popup Form ============ */}
      {showMobileForm && (
        <div className="md:hidden fixed top-[20%] left-1/2 transform -translate-x-1/2 w-[90vw] h-auto py-8 bg-white rounded-xl shadow-xl z-30 px-4 border border-gray-200 overflow-y-auto">
          {/* Close Button */}
          <button
            className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
            onClick={() => setShowMobileForm(false)}
          >
            &times;
          </button>

          <h2 className="text-xl text-orange-400 font-bold pb-4 text-center">
            Flights
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {Object.keys(formData).map((field, index) => (
              <div className="w-full" key={index}>
                <label className="block font-semibold mb-1 pl-1">
                  {labels[field]}
                </label>
                <input
                  type={
                    ["departure", "returnDate"].includes(field)
                      ? "date"
                      : field === "guests"
                      ? "number"
                      : "text"
                  }
                  name={field}
                  placeholder={placeholders[field]}
                  value={formData[field]}
                  onChange={handleChange}
                  min={
                    ["departure", "returnDate"].includes(field)
                      ? new Date().toISOString().split("T")[0]
                      : "0"
                  }
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required={field !== "returnDate"} // return optional
                />
              </div>
            ))}

            {/* Submit Button */}
            <div className="w-full">
              <button
                type="submit"
                className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 hover:scale-95 py-3 px-6 mt-2 text-white rounded-xl font-semibold w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FlightsForm;
