import React from "react";
import RestaurantCards from "./RestaurantCards";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCards />
      </div>
    </div>
  );
};

export default Body;
