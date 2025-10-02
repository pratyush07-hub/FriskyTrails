import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[rgb(247, 241, 231)] text-black text-center p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Oops! Page Not Found 😢</h2>
      <p className="text-gray-400 mb-8">
        The page you’re looking for doesn’t exist or is not accessible.
      </p>

      <Link
        to="/"
        className="bg-amber-500 hover:bg-amber-600 transition-colors px-6 py-3 rounded-md font-semibold text-white"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
