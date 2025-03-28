import { summary } from "framer-motion/client";
import React from "react";

const Blogleft = () => {
  const data = [
    {
      heading: "Step Into The Mall Of The Emirates",
      image: "/images/Mall.webp",

      des: "Enter a premier shopping and entertainment hotspot free of cost. The Mall of the Emirates features international stores, inviting you to satisfy your shopaholic nature. Additionally, you can savour multi-cuisine around the world under one roof and enter the realm of ecstasy. Not to forget the iconic ski resort Ski Dubai and state-of-the-art movie complexes. From window shopping to clicking beautiful pictures, you can have the best time here with loved ones. Overall, the jaw-dropping architectural splendour and what lies inside the Mall of the Emirates make it one of the best shopping places in Dubai.",

      location: "Sheikh Zayed Roa, Dubai, UAE",
      timings: "10:00 am -12:00 am",
      highlights:
        "Ski Dubai, The Magic Planet, Cinema complex, Extensive Dining Options",
    },
    {
      heading: "Step Into The Mall Of The Emirates",
      image: "/images/Mall.webp",

      des: "Enter a premier shopping and entertainment hotspot free of cost. The Mall of the Emirates features international stores, inviting you to satisfy your shopaholic nature. Additionally, you can savour multi-cuisine around the world under one roof and enter the realm of ecstasy. Not to forget the iconic ski resort Ski Dubai and state-of-the-art movie complexes. From window shopping to clicking beautiful pictures, you can have the best time here with loved ones. Overall, the jaw-dropping architectural splendour and what lies inside the Mall of the Emirates make it one of the best shopping places in Dubai.",

      location: "Sheikh Zayed Roa, Dubai, UAE",
      timings: "10:00 am -12:00 am",
      highlights:
        "Ski Dubai, The Magic Planet, Cinema complex, Extensive Dining Options",
    },
    {
      heading: "Step Into The Mall Of The Emirates",
      image: "/images/Mall.webp",

      des: "Enter a premier shopping and entertainment hotspot free of cost. The Mall of the Emirates features international stores, inviting you to satisfy your shopaholic nature. Additionally, you can savour multi-cuisine around the world under one roof and enter the realm of ecstasy. Not to forget the iconic ski resort Ski Dubai and state-of-the-art movie complexes. From window shopping to clicking beautiful pictures, you can have the best time here with loved ones. Overall, the jaw-dropping architectural splendour and what lies inside the Mall of the Emirates make it one of the best shopping places in Dubai.",

      location: "Sheikh Zayed Roa, Dubai, UAE",
      timings: "10:00 am -12:00 am",
      highlights:
        "Ski Dubai, The Magic Planet, Cinema complex, Extensive Dining Options",
    },
  ];
  return (
    <>
      <p className="w-[90%] pt-10">
        What to do in Dubai for free? Confused, aren’t you in 2024? Dubai houses
        sky-touching scrapers and traditions wrapped in a blanket of deserts and
        exotic man-made islands. With a reputation for over-the-top luxury, the
        cosmopolitan Mideast Sheikdom is hard to relate to ‘free things’. Isn’t
        it? But there are plenty of free things to do in Dubai, believe it or
        not. And the list includes those things you would not even be able to
        think of! Dubai offers various spots, from museums to art galleries, for
        a no-money-spent experience. So, aren’t you excited? Well, read along!
      </p>
      {data.map((item, index) => (
        <div key={index} className="pt-6">
          <h1 className="text-2xl pl-2 pt-4 font-bold tracking-tighter">
            {index + 1}. {item.heading}
          </h1>
          <img className="pt-2" src={item.image} alt="" />
          <p className="w-[90%] pt-4">{item.des}</p>
          <h3 className="pt-4">
            <b>Location:</b> {item.location}
          </h3>
          <h3 className="pt-4">
            <b>Timings:</b> {item.timings}
          </h3>
          <h3 className="pt-4">
            <b>Highlights:</b> {item.highlights}
          </h3>
        </div>
      ))}
    </>
  );
};

export default Blogleft;
