import { useEffect, useState } from "react";
import { hotelBooking } from "../api/hotel.api"; // Correct API import

const HotelForm = () => {
  const [formData, setFormData] = useState({
    city: "",
    budget: "",
    checkInDate: "",
    checkOutDate: "",
    guests: "",
  });

  const [showMobileForm, setShowMobileForm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await hotelBooking(formData); // Call correct API
      if (response.success) {
        alert("Hotel booked successfully!");
      } else {
        alert("Failed to book hotel.");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "An error occurred while booking the hotel."
      );
    }
    setFormData({
      city: "",
      budget: "",
      checkInDate: "",
      checkOutDate: "",
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
    city: "City",
    budget: "Budget (in ₹)",
    checkInDate: "Check-In",
    checkOutDate: "Check-Out",
    guests: "Guests",
  };

  const placeholders = {
    city: "Enter city",
    budget: "Enter budget",
    checkInDate: "Select date",
    checkOutDate: "Select date",
    guests: "No. of guests",
  };

  return (
    <>
      {/* Tablet/Desktop Form */}
      <div className="hidden md:block bg-white h-auto w-[90vw] rounded-lg z-20 absolute bottom-40 lg:bottom-60 xl:bottom-20 left-1/2 transform -translate-x-1/2 shadow-lg px-10 py-4">
        <h2 className="text-2xl text-orange-400 font-bold pb-4 text-center">
          Hotels
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
              {field === "budget" ? (
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    name={field}
                    placeholder={placeholders[field]}
                    value={formData[field]}
                    onChange={handleChange}
                    min="0"
                    step="100"
                    className="w-full pl-8 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>
              ) : (
                <input
                  type={
                    field === "checkInDate" || field === "checkOutDate"
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
                    field === "checkInDate" || field === "checkOutDate"
                      ? new Date().toISOString().split("T")[0]
                      : "0"
                  }
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              )}
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

      {/* Mobile Trigger Button */}
      <div className="md:hidden relative text-center bottom-10 z-10">
        <button
          onClick={() => setShowMobileForm(true)}
          className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 hover:bg-amber-400 text-white px-6 py-3 rounded-xl shadow-md font-semibold"
        >
          Book My Stay
        </button>
      </div>

      {/* Mobile Popup Form */}
      {showMobileForm && (
        <div className="md:hidden fixed top-[20%] left-1/2 transform -translate-x-1/2 w-[90vw] h-auto py-8 bg-white rounded-xl shadow-xl z-30 px-4 border border-gray-200 overflow-y-auto">
          <button
            className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
            onClick={() => setShowMobileForm(false)}
          >
            &times;
          </button>

          <h2 className="text-xl text-orange-400 font-bold pb-4 text-center">
            Hotels
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {Object.keys(formData).map((field, index) => (
              <div className="w-full" key={index}>
                <label className="block font-semibold mb-1 pl-1">
                  {labels[field]}
                </label>
                {field === "budget" ? (
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      ₹
                    </span>
                    <input
                      type="number"
                      name={field}
                      placeholder={placeholders[field]}
                      value={formData[field]}
                      onChange={handleChange}
                      min="0"
                      step="100"
                      className="w-full pl-8 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                    />
                  </div>
                ) : (
                  <input
                    type={
                      field === "checkInDate" || field === "checkOutDate"
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
                      field === "checkInDate" || field === "checkOutDate"
                        ? new Date().toISOString().split("T")[0]
                        : "0"
                    }
                    className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                )}
              </div>
            ))}

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

export default HotelForm;
