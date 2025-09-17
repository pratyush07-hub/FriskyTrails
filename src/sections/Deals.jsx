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
      title: " Uttarakhand",
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
            column !== "middle"
              ? "h-[25vh] md:h-[33vh] my-2 md:my-3"
              : "h-[50vh] md:h-[68vh]"
          } w-full md:w-[26vw] rounded-2xl shadow-2xl relative overflow-hidden`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
            style={{
              backgroundImage: `url('${deal.image}')`,
            }}
          ></div>
          <h1 className="absolute bottom-7 text-white font-semibold text-lg px-4 py-1 drop-shadow">
            {deal.title}
          </h1>
          <h1 className="absolute bottom-2 text-white px-4 py-1 drop-shadow">
            {deal.duration}
          </h1>
        </div>
      ));

  return (
    <div className="min-h-screen w-full md:pt-10 lg:pt-20">
      <h1 className="px-4 md:pt-20 lg:px-38 text-2xl md:text-4xl font-bold tracking-tight">
        Deals You Can't Miss
      </h1>
      <p className="pt-2 pb-4 md:pb-6 px-4 md:px-20 font-semibold text-xl lg:px-38">
        Travel beyond boundaries with incredible savings
      </p>

      {/* Desktop/tablet view */}
      <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[70vh] w-full md:w-[90vw] lg:w-[80vw] rounded-lg bg-white m-auto p-4 md:p-0">
        <div className="mx-auto">{renderDealsByColumn("left")}</div>
        <div className="m-auto">{renderDealsByColumn("middle")}</div>
        <div className="mx-auto">{renderDealsByColumn("right")}</div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col gap-4 px-4 md:hidden">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="h-[30vh] w-full rounded-2xl shadow-2xl relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
              style={{
                backgroundImage: `url('${deal.image}')`,
              }}
            ></div>
            <h1 className="absolute bottom-7 text-white font-semibold text-lg px-4 py-1 drop-shadow">
              {deal.title}
            </h1>
            <h1 className="absolute bottom-2 text-white px-4 py-1 drop-shadow">
              {deal.duration}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
