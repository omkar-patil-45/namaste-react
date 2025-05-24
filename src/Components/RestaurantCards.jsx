import React from "react";
import { CDN_URL } from "../Utils/constants";

const RestaurantCards = ({ resData }) => {
  const {
    cloudinaryImageId = "",
    name = "Unknown",
    avgRating = "N/A",
    cuisines = [],
  } = resData?.info || {};

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300" >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCards;
