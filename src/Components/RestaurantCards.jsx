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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCards;
