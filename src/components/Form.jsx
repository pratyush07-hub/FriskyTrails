import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    duration: "",
    budget: "",
    date: "",
    guests: "",
  });

  const [showMobileForm, setShowMobileForm] = useState(false);

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
    setShowMobileForm(false); // close form on mobile after submit
  };

  return (
    <>
      {/* ================= Tablet/Desktop Form (Always Visible) ================= */}
      <div className="hidden md:block bg-white h-auto w-[90vw] rounded-lg z-20 absolute bottom-40 left-1/2 transform -translate-x-1/2 shadow-lg px-10 py-4">
        <h2 className="text-2xl text-orange-400 font-bold pb-4 text-center">
          Where's Your Next Adventure?
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-center items-center w-full xl:flex-nowrap xl:gap-10"
        >
          {["from", "to", "duration", "budget", "date", "guests"].map((field, index) => {
            const labels = {
              from: "From City",
              to: "To City",
              duration: "Duration (in Days)",
              budget: "Budget (in ₹)",
              date: "Departure Date",
              guests: "No. of Guests",
            };
            const placeholders = {
              from: "Enter location",
              to: "Enter destination",
              duration: "Enter duration",
              budget: "Enter amount",
              guests: "No. of persons",
            };
            return (
              <div className="w-full md:w-[30%]" key={index}>
                <label className="block font-semibold mb-1 pl-1">{labels[field]}</label>
                <input
                  type={field === "date" ? "date" : ["budget", "duration", "guests"].includes(field) ? "number" : "text"}
                  name={field}
                  placeholder={placeholders[field]}
                  value={formData[field]}
                  onChange={handleChange}
                  min={field === "date" ? new Date().toISOString().split("T")[0] : "0"}
                  step={field === "budget" ? "1000" : undefined}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>
            );
          })}
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

      {/* ================= Mobile Form Trigger Button ================= */}
      <div className="md:hidden relative text-center bottom-30 z-10">
        <button
          onClick={() => setShowMobileForm(true)}
          className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 hover:bg-amber-400 text-white px-6 py-3 rounded-xl shadow-md font-semibold"
        >
          Open Travel Form
        </button>
      </div>

      {/* ================= Mobile Form Popup ================= */}
      {showMobileForm && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center">
          <div className="bg-white w-[90vw] max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
              onClick={() => setShowMobileForm(false)}
            >
              &times;
            </button>

            <h2 className="text-xl text-orange-400 font-bold pb-4 text-center">
              Where's Your Next Adventure?
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 justify-center items-center w-full"
            >
              {["from", "to", "duration", "budget", "date", "guests"].map((field, index) => {
                const labels = {
                  from: "From City",
                  to: "To City",
                  duration: "Duration (in Days)",
                  budget: "Budget (in ₹)",
                  date: "Departure Date",
                  guests: "No. of Guests",
                };
                const placeholders = {
                  from: "Enter location",
                  to: "Enter destination",
                  duration: "Enter duration",
                  budget: "Enter amount",
                  guests: "No. of persons",
                };
                return (
                  <div className="w-full" key={index}>
                    <label className="block font-semibold mb-1 pl-1">{labels[field]}</label>
                    <input
                      type={field === "date" ? "date" : ["budget", "duration", "guests"].includes(field) ? "number" : "text"}
                      name={field}
                      placeholder={placeholders[field]}
                      value={formData[field]}
                      onChange={handleChange}
                      min={field === "date" ? new Date().toISOString().split("T")[0] : "0"}
                      step={field === "budget" ? "1000" : undefined}
                      className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                      required
                    />
                  </div>
                );
              })}
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
        </div>
      )}
    </>
  );
};

export default Form;
