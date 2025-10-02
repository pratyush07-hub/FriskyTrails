import { useEffect, useState } from "react";
import { getCurrentUser } from "../api/user.api";
import NotFound from "../components/NotFound";

// Import all forms
import CreateBlogForm from "./CreateBlogForm";
import CreateCityForm from "./CreateCityForm";
import CreateCountryForm from "./CreateCountryForm";
import CreateProductPage from "./CreateProductPage";
import CreateProductType from "./CreateProductType";
import CreateStateForm from "./CreateStateForm";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(""); // No active tab by default
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAllowed, setIsAllowed] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await getCurrentUser();
        const user = res.data.user;
        if (!user || user.admin !== true) {
          setIsAllowed(false);
        } else {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error(err);
        alert("Failed to verify user");
        window.location.href = "/";
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) return null;
  if (!isAllowed) return <NotFound />;
  if (!isAdmin) return null;

  const sections = [
    { key: "create-blog", title: "Create Blog", component: <CreateBlogForm /> },
    { key: "create-city", title: "Create City", component: <CreateCityForm /> },
    { key: "create-country", title: "Create Country", component: <CreateCountryForm /> },
    { key: "create-product", title: "Create Product", component: <CreateProductPage /> },
    { key: "create-product-type", title: "Create Product Type", component: <CreateProductType /> },
    { key: "create-state", title: "Create State", component: <CreateStateForm /> },
  ];

  return (
    <div className="p-6 max-w-6xl mt-30 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* When no tab is active, show cards */}
      {!activeTab && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div
              key={section.key}
              onClick={() => setActiveTab(section.key)}
              className="cursor-pointer bg-white shadow-lg rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 border border-gray-100"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {section.title}
              </h2>
              <p className="text-gray-500 text-sm">
                Click to open {section.title} form
              </p>
            </div>
          ))}
        </div>
      )}

      {/* When a section is selected */}
      {activeTab && (
        <div>
          <button
            onClick={() => setActiveTab("")}
            className="mb-4 inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition"
          >
            ⬅ Back to Dashboard
          </button>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
            {sections.find((s) => s.key === activeTab)?.component}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
