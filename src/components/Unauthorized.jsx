const Unauthorized = () => {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center text-center px-4">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Access denied</h1>
        <p className="text-gray-600">You do not have permission to view this page.</p>
      </div>
    </div>
  );
};

export default Unauthorized;

