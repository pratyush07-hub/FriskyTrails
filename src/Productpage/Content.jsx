const Content = () => {
  const data = [
    {
      Q: "When is the best time to visit Vagamon for paragliding?",
      Ans: "The best time to visit Vagamon for paragliding is in the summers during the month of February to May. The summer season is perfect for paragliding in Vagamon because during the summers the weather conditions remain dry and the wind speed remains normal which is more suitable for the paragliding activity."
    },
    {
      Q: "When is the best time to visit Vagamon for paragliding?",
      Ans: "The best time to visit Vagamon for paragliding is in the summers during the month of February to May. The summer season is perfect for paragliding in Vagamon because during the summers the weather conditions remain dry and the wind speed remains normal which is more suitable for the paragliding activity."
    },
    {
      Q: "When is the best time to visit Vagamon for paragliding?",
      Ans: "The best time to visit Vagamon for paragliding is in the summers during the month of February to May. The summer season is perfect for paragliding in Vagamon because during the summers the weather conditions remain dry and the wind speed remains normal which is more suitable for the paragliding activity."
    }
  ];

  return (
    <div className="w-[96%] max-h-[90vh] overflow-y-auto custom-scrollbar p-4 rounded-lg shadow-md">
      <h3 className="text-2xl">
        Solang Valley Paragliding​{" "}
        <span className="text-orange-500 font-semibold">Highlights</span>
      </h3>
      <ul className="list-disc list-outside pl-5 pt-2 text-gray-700 space-y-2">
        <li>
          Soar over Manali’s Solang Valley, reaching heights of up to 8,000 feet,
          with a paragliding experience that offers incredible views of lush valleys
          and snow-covered peaks. 🥳Use <b>FRO100</b> at checkout and <b>SAVE ₹100</b>!🥳
        </li>
        <li>Experience a thrilling 5-minute paragliding package, designed for those seeking a quick adrenaline rush while enjoying the stunning views of Manali's landscape.</li>
        <li>Glide through the sky and enjoy bird’s eye views of the Beas River, Solang Valley, and surrounding mountains.</li>
        <li>Take off from one of the highest paragliding sites in Manali, the Solang Valley, where you can relish the exhilarating rush of gliding through the crisp mountain air.</li>
      </ul>
      <h3 className="text-2xl pt-10">
          Solang Valley Paragliding​{" "}
          <span className="text-orange-500 font-semibold">Overviews</span>
        </h3>
        <ul className="list-disc list-outside pl-5 pt-2 text-gray-700 space-y-2">
          <li>
            Soar over Manali’s Solang Valley, reaching heights of upto 8,000
            feet, with a paragliding experience that offers incredible views of
            lush valleys and snow-covered peaks. 🥳Use FRO100 at checkout
            and SAVE ₹100!🥳
          </li>
          <li>Experience a thrilling 5-minute paragliding package, designed for those seeking a quick adrenaline rush while enjoying the stunning views of Manali's landscape.</li>
          <li>Glide through the sky and enjoy bird’s eye views of the Beas River, Solang Valley, and surrounding mountains.</li>
          <li>Glide through the sky and enjoy bird’s eye views of the Beas River, Solang Valley, and surrounding mountains.</li>
          <li>Take off from one of the highest paragliding sites in Manali, the Solang Valley, where you can relish the exhilarating rush of gliding through the crisp mountain air.</li>
        </ul>
        <h3 className="text-2xl pt-10">
          Solang Valley Paragliding​{" "}
          <span className="text-orange-500 font-semibold">Itinerary</span>
        </h3>
        <ul className="list-disc list-outside pl-5 pt-2 text-gray-700 space-y-2">
          <li>
            Soar over Manali’s Solang Valley, reaching heights of upto 8,000
            feet, with a paragliding experience that offers incredible views of
            lush valleys and snow-covered peaks. 🥳Use FRO100 at checkout
            and SAVE ₹100!🥳
          </li>
          <li>Experience a thrilling 5-minute paragliding package, designed for those seeking a quick adrenaline rush while enjoying the stunning views of Manali's landscape.</li>
          <li>Glide through the sky and enjoy bird’s eye views of the Beas River, Solang Valley, and surrounding mountains.</li>
          <li>Glide through the sky and enjoy bird’s eye views of the Beas River, Solang Valley, and surrounding mountains.</li>
          <li>Take off from one of the highest paragliding sites in Manali, the Solang Valley, where you can relish the exhilarating rush of gliding through the crisp mountain air.</li>
        </ul>

        <h3 className="text-2xl pt-10">
          Solang Valley Paragliding​{" "}
          <span className="text-orange-500 font-semibold">Things to Carry</span>
        </h3>
        <ul className="list-disc list-outside pl-5 pt-2 text-gray-700 space-y-2">
          <li>Valid id proof</li>
          <li>Comfortable Clothes</li>
          
        </ul>

        <h3 className="text-2xl pt-10">
          Solang Valley Paragliding​{" "}
          <span className="text-orange-500 font-semibold">Additional Info</span>
        </h3>
        <ul className="list-disc list-outside pl-5 pt-2 text-gray-700 space-y-2">
          <li>
            Soar over Manali’s Solang Valley, reaching heights of upto 8,000
            feet, with a paragliding experience that offers incredible views of
            lush valleys and snow-covered peaks. 🥳Use FRO100 at checkout
            and SAVE ₹100!🥳
          </li>
          <li>Experience a thrilling 5-minute paragliding package, designed for those seeking a quick adrenaline rush while enjoying the stunning views of Manali's landscape.</li>
          <li>Glide through the sky and enjoy bird’s eye views of the Beas River, Solang Valley, and surrounding mountains.</li>
          <li>Glide through the sky and enjoy bird’s eye views of the Beas River, Solang Valley, and surrounding mountains.</li>
          <li>Take off from one of the highest paragliding sites in Manali, the Solang Valley, where you can relish the exhilarating rush of gliding through the crisp mountain air.</li>
        </ul>

      <h1 className="text-2xl font-semibold pt-10">Vagamon Paragliding FAQs</h1>
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-6 mt-4">
          <div className="h-10 w-10 aspect-square text-white rounded-full flex justify-center items-center bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400">
            {index + 1}
          </div>
          <div>
            <h1 className="text-xl font-semibold">{item.Q}</h1>
            <h1 className="text-sm">{item.Ans}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
