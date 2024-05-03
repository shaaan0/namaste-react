import React, { useEffect, useState } from "react";
import resObj from "../utils/restaurantList";
import RestaurantCard, { withDiscountPromotion } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default MainComponent = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchtext, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const DiscountedRestaurantCard = withDiscountPromotion(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.68768829999999&lng=77.1946217&is-seo-homepage-enabled=false&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(restaurantList);
    setFilteredList(restaurantList);
    setIsLoading(false);
  };

  // const onlineStatus = useOnlineStatus()

  if (!onlineStatus)
    return (
      <h1>
        {" "}
        Hey, poor internet connection. Please check you Internet Connection
      </h1>
    );

  return (
    <div className="body-container">
      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="m-auto max-w-[1470px]">
          <div className="flex justify-between m-4">
            <button
              className="bg-red-100 px-2 rounded-2xl"
              onClick={() => {
                setIsLoading(true);
                const filteredList = listOfRestaurant.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredList(filteredList);
                setIsLoading(false);
              }}
            >
              Top Rated Restaurant
            </button>
            <div className="search">
              <input
                className="border border-s-violet-50"
                value={searchtext}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="px-2 bg-green-100 rounded-xs"
                onClick={() => {
                  let data = listOfRestaurant.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchtext.toLowerCase())
                  );
                  setFilteredList(data);
                }}
              >
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-wrap">
            {filteredList?.map((data) => (
              <Link to={"/restaurant/" + data.info.id}>
                {data.info.aggregatedDiscountInfoV3 ? (
                  <DiscountedRestaurantCard key={data.info.id} resData={data} />
                ) : (
                  <RestaurantCard key={data.info.id} resData={data} />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
