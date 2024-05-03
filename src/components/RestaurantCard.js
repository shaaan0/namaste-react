import React from "react";
import LOGO_URL from "../utils/imageURLs";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, sla, areaName, cuisines } =
    resData?.info;
  return (
    <div className="mr-4 p-2 w-[350] hover:transform hover:scale-90 transition-transform duration-300"> 
      
      <img
        className=" rounded-lg w-[350] h-[200] object-cover object-center "
        src={`${LOGO_URL.res_logo}${cloudinaryImageId}`}
      />
      
      <h3 className="res-name">{name}</h3>
      <div className="res-details">
        <h4>{avgRating} stars</h4>
        <div className="res-decorator"></div>
        <h4>{sla.slaString}</h4>
      </div>
      <div className="">{cuisines.join(", ")}</div>
      <div className="res-location">{areaName}</div>
    </div>
  );
};


export const withDiscountPromotion = (RestaurantCard) => {
  return (props) => {
    const {header, subHeader} = props.resData.info.aggregatedDiscountInfoV3
    return (
      <>
        <label className="absolute text-white font-extrabold bg-slate-700 shadow-lg p-2 rounded-md z-10">{header} {subHeader}</label>
        <RestaurantCard {...props}/>
      </>
    )
  }
}

export default RestaurantCard;
