const Landing = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <video
        className="top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/images/Webvi.webm"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Landing;
