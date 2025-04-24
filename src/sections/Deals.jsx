import React from 'react';

const Deals = () => {
  const deals = [
    {
      image: "/holidaysimages/Kashmir.webp",
      title: "Kashmir",
      duration: "4 Nights / 5 days",
      column: "left",
    },
    {
      image: "/holidaysimages/Rishikesh.webp",
      title: "Rishikesh",
      duration: "5 Nights / 6 days",
      column: "left",
    },
    {
      image: "/holidaysimages/Kerala.webp",
      title: "Kerala",
      duration: "6 Nights / 7 days",
      column: "middle",
    },
    {
      image: "/holidaysimages/Goa.webp",
      title: "Goa",
      duration: "5 Nights / 6 days",
      column: "right",
    },
    {
      image: "/holidaysimages/Andaman.webp",
      title: "Andaman",
      duration: "4 Nights / 5 days",
      column: "right",
    },
  ];

  const renderDealsByColumn = (column) =>
    deals
      .filter((deal) => deal.column === column)
      .map((deal, index) => (
        <div
          key={index}
          className={`${
            column !== "middle" ? "h-[33vh] my-3" : "h-[68vh]"
          } w-[26vw] rounded-2xl shadow-2xl relative overflow-hidden`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
            style={{
              backgroundImage: `url('${deal.image}')`,
            }}
          ></div>
          <h1 className="absolute bottom-7 text-white font-semibold text-lg px-4 py-1">
            {deal.title}
          </h1>
          <h1 className="absolute bottom-2 text-white px-4 py-1">
            {deal.duration}
          </h1>
        </div>
      ));

  return (
    <>
      <div className="h-screen w-full pt-30">
        <h1 className="pl-38 text-4xl font-bold tracking-tight">
          Deals You Can't Miss
        </h1>
        <p className="pt-2 pb-6 pl-38">
          Travel beyond boundaries with incredible savings
        </p>
        <div className="grid grid-cols-3 h-[70vh] w-[80vw] rounded-lg bg-white m-auto">
          <div className="mx-auto">{renderDealsByColumn("left")}</div>
          <div className="m-auto">{renderDealsByColumn("middle")}</div>
          <div className="mx-auto">{renderDealsByColumn("right")}</div>
        </div>
      </div>
    </>
  );
};

export default Deals;
