import React from "react"
import LOGO_URL from '../utils/imageURLs'

const RestaurantCard = ({resData}) => {
    const {cloudinaryImageId,name,avgRating,sla,areaName,cuisines} = resData?.info
    
    
        return (

                <div className="card-container">
            <img className="res-img" src={`${LOGO_URL.res_logo}${cloudinaryImageId}`}/>
            <h3 className="res-name">{name}</h3>
            <div className="res-details">
                <h4>{avgRating} stars</h4>
                <div className="res-decorator"></div>
                <h4>{sla.slaString}</h4>
            </div>
            <div className="res-cuisine">
               {cuisines.join(', ')}
            </div>
            <div className="res-location">{areaName}</div>
        </div>
            )
            
            
               
}

export default RestaurantCard