import { useEffect, useState } from "react";
import { getAllStates } from "../api/admin.api";
import EditStateForm from "./EditStateForm";



const AllStates = () => {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const fetchStates = async () => {
    try {
      setLoading(true);
      const result = await getAllStates();

      if (!result.data) {
        throw new Error(result.message || "Failed to fetch states");
      }

      setStates(result.data || []);
    } catch (err) {
      console.error("Error fetching states:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  /* -------------------- STATES -------------------- */

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 text-gray-500">
        Loading states...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-medium mt-10">
        ⚠️ {error}
      </div>
    );
  }

  if (states.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-10">
        No states found 😕
      </div>
    );
  }

  /* -------------------- EDIT MODE -------------------- */

  if (selectedState) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
        <button
          onClick={() => setSelectedState(null)}
          className="mb-4 inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition"
        >
          ⬅ Back to All States
        </button>

        <h2 className="text-2xl font-bold mb-4">Edit State</h2>

        <EditStateForm
          stateId={selectedState._id}
          onUpdate={fetchStates}
          onClose={() => setSelectedState(null)}
        />
      </div>
    );
  }

  /* -------------------- LIST MODE -------------------- */

  return (
    <section className="max-w-6xl mx-auto px-2 sm:px-4 py-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">All States</h2>
        <button
          onClick={fetchStates}
          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
        >
          🔄 Refresh
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {states.map((state) => (
          <div
            key={state._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition"
          >
            {state.image && (
              <img
                src={state.image}
                alt={state.name}
                className="w-full h-40 object-cover"
              />
            )}

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {state.name}
              </h3>

              <p className="text-sm text-gray-500 mb-2">
                Slug: <span className="font-medium">{state.slug}</span>
              </p>

              {state.country?.name && (
                <p className="text-xs text-gray-400 mb-3">
                  🌍 {state.country.name}
                </p>
              )}

              <div className="flex justify-between items-center">
                <a
                  href={`/state/${state.slug}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View →
                </a>

                <button
                  onClick={() => setSelectedState(state)}
                  className="text-sm text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md"
                >
                  ✏️ Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllStates;

