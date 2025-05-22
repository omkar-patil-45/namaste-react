import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../Utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  if (!resInfo) return <ShimmerUi />;

  const infoCard = resInfo?.cards?.find((card) => card?.card?.card?.info);

  const {
    name,
    cuisines = [],
    costForTwoMessage,
  } = infoCard?.card?.card?.info || {};

  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const items = regularCards.flatMap(
    (card) => card?.card?.card?.itemCards || []
  );
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {items.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
