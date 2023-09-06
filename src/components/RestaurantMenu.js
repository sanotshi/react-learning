import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //  const resMenu=resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //  setResInfo(resMenu);
  };
  if (resInfo === null) return <Shimmer />;
   const { name, cuisines, costForTwo } =
     resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]
    .info;

  const {itemCards}=resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants;
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines} - {costForTwo}</p>
      {/* <h1>{itemCards.info.name}</h1> */}
      
       {/* <h1>{resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info?.name}</h1>  */}
        <ul>
        {/* {(resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]).map(item =><li>{item.info.nam}</li>)} */}
        {/* {itemCards[0].map(item=><li>{item.card.info.name}</li>)} */}
       </ul> 
      {/* <h1>{name}</h1>
      <p>{cuisines.join(",")} - {costForTwo}</p> */}
      {/* <h3>{costForTwo}</h3> */}
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
