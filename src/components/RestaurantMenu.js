import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItems from "./MenuItems";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();
  const resData = useRestaurantMenu(params.resId);
  const [showDetails, setShowDetails] = useState(0);
  if (resData === null) return <Shimmer />;

  const info = resData?.cards[2]?.card?.card.info;
  let menuItems = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  menuItems = menuItems?.filter(
    (item) =>
      item?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="m-auto max-w-[670]">
      <div>
        <div>
          <div>
            <h2>{info.name}</h2>
            <p>{info.cuisines.join(", ")}</p>
            <p>{info.areaName}</p>
          </div>
          <div>
            {info.avgRating} {info.totalRatingsString}
          </div>
        </div>
        <div>
          <h2>{info.sla.slaString}</h2>
          <h2>{info.costForTwoMessage}</h2>
        </div>
      </div>
      {menuItems ? (
        <div className="menu">
          {menuItems.map((item, index) => (
            <MenuItems
              key={item.card.card.title + index}
              isVisible={showDetails === index}
              changeShowDetails={(val = index) => setShowDetails(val)}
              title={item.card.card.title}
              itemCards={item.card.card.itemCards}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RestaurantMenu;
