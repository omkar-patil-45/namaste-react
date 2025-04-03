import React from "react";

const RestaurantCards = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/7f339cda-af8e-4bdf-a822-e91a5c4740d5_98314.jpg"
        alt="res-logo"
      />
      <h3>McDonalds</h3>
      <h4>Burgers,Cafe,Desserts</h4>
      <h4>4.4 stars</h4>
      <h4>38 minitus</h4>
    </div>
  );
};

export default RestaurantCards;
