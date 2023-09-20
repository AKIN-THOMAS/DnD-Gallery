import React, { useEffect, useState } from "react";
import Login from "../components/auth/Login";
// import ImageGallary from "../components/ImageGallary";
import icecream from "../assets/icecream.svg";
import avengers from "../assets/avengers-island.svg";
import castle from "../assets/castle.svg";
import clouds from "../assets/cloud-island.svg";
import fantasy from "../assets/fantasy-island.svg";
import road_house from "../assets/road-house.svg";
import solar_house from "../assets/solar-house.svg";
import stonelight from "../assets/stonelight.svg";
import ImageGallery1 from "../components/ImageGallery";
import hut from "../assets/hut.svg";
import candy from "../assets/candy.svg";
import kingslanding from "../assets/kingslanding.svg";
import teddies from "../assets/teddies.svg";

import { arrayMove } from "@dnd-kit/sortable";

const Main = () => {
  const imageItems = [
    { id: "1", url: icecream, title: "Ice-cream", type: "nft" },
    { id: "2", url: avengers, title: "Avengers island", type: "nft" },
    { id: "3", url: castle, title: "Castle", type: "nft" },
    { id: "4", url: clouds, title: "Cloud island", type: "nft" },
    { id: "5", url: fantasy, title: "Fantasy island", type: "nft" },
    { id: "6", url: road_house, title: "Road house", type: "nft" },
    { id: "7", url: solar_house, title: "Solar house", type: "nft" },
    { id: "8", url: stonelight, title: "Stonelight", type: "nft" },
    { id: "9", url: hut, title: "Hut city", type: "nft" },
    { id: "10", url: candy, title: "Candy town", type: "nft" },
    { id: "11", url: kingslanding, title: "Kingslanding", type: "nft" },
    { id: "12", url: teddies, title: "Teddies", type: "nft" },
  ];

  const [authentication, setAuthentication] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setImages(imageItems);
    }, 20000);
  }, []);

  const handleAccess = () => {
    setAuthentication(true);
  };
  const handleDragEnd = (event) => {
    console.log("Dragged");
    const { active, over } = event;
    console.log(`ACTIVE: ${active.id}`);
    console.log(`OVER: ${over.id}`);

    if (active.id !== over.id) {
      setImages((items) => {
        const newItems = arrayMove(
          items,
          items.findIndex((item) => item.id === active.id),
          items.findIndex((item) => item.id === over.id)
        );
        console.log(newItems);
        return newItems;
      });
    }
  };

  return (
    <div>
      {authentication ? (
        <>
          <ImageGallery1
            images={images}
            loading={loading}
            handleDragEnd={handleDragEnd}
          />
        </>
      ) : (
        <>
          <Login onLogin={handleAccess} />
        </>
      )}
    </div>
  );
};

export default Main;
