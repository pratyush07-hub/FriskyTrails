import { useState } from "react";
import CreateBlogForm from "./CreateBlogForm";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Only one tab for now */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveTab("create")}
          className={`px-4 py-2 rounded ${activeTab === "create" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Create Blog
        </button>
      </div>

      <CreateBlogForm />
    </div>
  );
};

export default Dashboard;
