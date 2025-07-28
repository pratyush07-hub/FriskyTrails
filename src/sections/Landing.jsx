const Landing = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 object-cover"
        src="/images/Webvi.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional for text visibility) */}
      <div className="absolute top-0 left-0 w-full h-full" />

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* <h1 className="text-white text-4xl text-center font-bold">
          Welcome to FriskyTrails
        </h1> */}
      </div>
    </div>
  );
};

export default Landing;

