import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utilities/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    //  const data=await fetch("https://www.swiggy.com/restaurants/jay-jalaram-thali-kaji-maidan-gopipura-surat-205488");

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );

    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.info
    );
  };
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwo } =
    resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]
      ?.info;

  const menuItems =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;

  return (
    <div className="m-2">
      {/* <div className="p-2">
        <h1 className="text-2xl ">{name}</h1>
        
      </div> */}
      {/* <h1>{actin.text}</h1> */}
      <div className="p-1 ">
        <h2 className="text-xl p-1">Menu</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="list-disc ml-8 text-sm">
              {item.action?.text} - {costForTwo}
            </li>
          ))}
        </ul>
        {/* <ul className="m-3" >
          {menuItems.map((item) => (
          <li key={item.id} className="list-disc ml-8 text-sm">{item.action.text} - {costForTwo}</li>
        ))} 
        </ul> */}
      </div>
    </div>
  );
};
export default RestaurantMenu;
