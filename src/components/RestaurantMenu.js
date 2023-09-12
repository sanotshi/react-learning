import useRestaurantMenu from "../utilities/useRestaurantMenu";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  console.log(
    resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info);
  
  const cost =
    resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

   console.log(resInfo?.cards[1]?.card?.card?.imageGridCards)  

  const menuItems =
    resInfo?.cards[1]?.card?.card?.imageGridCards?.info;

  return (
    <div className="p-3 ">
      <div>
        <h2 className="text-center text-3xl p-1">Menu</h2>
      </div>
      <div className="flex justify-center">
        <ul className=" ">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="text-lg p-4  text-center m-4 w-96 shadow-md rounded-lg flex justify-between"
            >
              {item.action?.text} - {cost.costForTwo} 
              {
                <button className="border px-2 py-1 mx-3 bg-black text-white rounded-md">
                  Add
                </button>
              }
            </li>
          ))}
        </ul>
      </div>

      {/* <span className="m-2 my-8 border p-2 bg-gray-100 cursor-pointer">
              Add
            </span>
            <label className="m-2 border">Add</label>
            <label className="m-2 border">Add</label> */}

      {/* <ul className="m-3" >
          {menuItems.map((item) => (
          <li key={item.id} className="list-disc ml-8 text-sm">{item.action.text} - {costForTwo}</li>
        ))} 
        </ul> */}
    </div>
  );
};
export default RestaurantMenu;
