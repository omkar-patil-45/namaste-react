import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../Utils/useRestrauntMenu";
import RastaurantCategory from "./RastaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <ShimmerUi />;

  const infoCard = resInfo?.cards?.find((card) => card?.card?.card?.info);

  const {
    name,
    cuisines = [],
    costForTwoMessage,
  } = infoCard?.card?.card?.info || {};

  // const regularCards =
  //   resInfo?.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
  //     ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = resInfo?.cards
    ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  // const items = regularCards.flatMap(
  //   (card) => card?.card?.card?.itemCards || []
  // );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      <p className="font-bold text-lg">{costForTwoMessage}</p>
      {categories.map((category, index) => (
        <RastaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            setShowIndex((prev) => (prev === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
