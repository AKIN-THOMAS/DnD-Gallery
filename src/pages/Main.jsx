import React, { useEffect, useState } from "react";
import Login from "../components/auth/Login";
import ImageGallery1 from "../components/ImageGallery";
import { arrayMove } from "@dnd-kit/sortable";
// import useAxios from "../components/hooks/useAxios";
// import ImageGallary from "../components/ImageGallary";
import icecream from "../assets/icecream.webp";
import avengers from "../assets/avengers-island.webp";
import castle from "../assets/castle.webp";
import clouds from "../assets/cloud-island.webp";
import fantasy from "../assets/fantasy-house.webp";
import road_house from "../assets/road-house.webp";
import solar_house from "../assets/solar-house.webp";
import stonelight from "../assets/stonelight.webp";
import hut from "../assets/hut.webp";
import candy from "../assets/candy.webp";
import kingslanding from "../assets/kingslanding.webp";
import teddies from "../assets/teddies.webp";

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

  // const { response, isLoading, error, fetchData } = useAxios(
  //   `search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  // );
  // console.log(response);
  const [authentication, setAuthentication] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setImages(imageItems);
    }, 10000);
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
