import { useState } from "react";

export default function Newone() {
  const [content, setContent] = useState("Click a button to change me!");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">{content}</h2>
        <div className="flex gap-4">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => setContent("Hello, World!")}>
            Set Hello
          </button>
          <button 
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={() => setContent("React & Tailwind are awesome!")}>
            Set React
          </button>
          <button 
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={() => setContent("Let's build amazing UI!")}>
            Set Amazing UI
          </button>
        </div>
      </div>
    </div>
  );
}
