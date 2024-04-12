import { useEffect, useState } from "react"
import LOGO_URL from "../utils/imageURLs";

const useRestaurantMenu =(resId) => {
    const [resData, setResData] = useState(null)

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const restaturantCode = resId;
        const data = await fetch( LOGO_URL.MENU_API + restaturantCode);
        const json = await data.json();
        setResData(json.data);
      };

    return resData
}

export default useRestaurantMenu