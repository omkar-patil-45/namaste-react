import React, { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
// import resList from "../Utils/mockData";

const Body = () => {
  // Extract the restaurants array
  // const restaurants =
  //   resList[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.6930839&lng=74.2226414&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  if(listOfRestaurants.length===0){
    return <h1>Loading......</h1>
  }

  // useEffect(() => {
  //   fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.6930839&lng=74.2226414&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setListOfRestaurants(data))
  //     .catch((error) => console.error(error));
  // }, []);
  // console.log(fetch)

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const restaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(restaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCards
            key={restaurant?.info?.id || `${restaurant?.info?.name}-${index}`}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
