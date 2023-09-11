
 import useRestaurantMenu from "../utilities/useRestaurantMenu";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  
  const { resId } = useParams();

   const resInfo=useRestaurantMenu(resId);

  
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
      <div className="p-3 text-center">
        <h2 className=" text-3xl p-1">Menu</h2>
        <div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className=" ml-8 text-lg p-2">
              {item.action?.text} - {costForTwo} -  { "+"}  
            </li>
            
          ))}
        </ul>
        </div>
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
