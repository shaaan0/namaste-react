import React, { useEffect, useState } from "react";
import resObj from "../utils/restaurantList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export default MainComponent = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchtext, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.68768829999999&lng=77.1946217&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(restaurantList);
    setFilteredList(restaurantList);
    setIsLoading(false);
  };

  return (
    <div className="body-container">
      {isLoading ? (
        <Shimmer />
      ) : (
        <div>
          <div className="filter">
            <button
              className="filter-btn"
              onClick={() => {
                const filteredList = listOfRestaurant.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredList(filteredList);
              }}
            >
              Top Rated Restaurant
            </button>
            <div className="search">
              <input
                className="search-input"
                value={searchtext}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
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

          <div className="res-container">
            {filteredList.map((data) => (
              <RestaurantCard key={data.info.id} resData={data} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
