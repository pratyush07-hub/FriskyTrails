import React from "react";

const Newblog = () => {
  return (
    <div className="bg-amber-950 h-50 w-90">
      <div
        style={{
          maxWidth: "100vw",
          backgroundImage: "url('/images/bgbanner.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "460px",
        }}
      >
        New Blog Content Here
      </div>
    </div>
  );
};

export default Newblog;
