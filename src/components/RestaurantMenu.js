import useRestaurantMenu from "../utilities/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utilities/cartSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const RestaurantMenu = ({}) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  // console.log(
  //   resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //     ?.info
  // );

   const cost =
     resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]
       ?.info;

  // console.log(resInfo?.cards[1]?.card?.card?.imageGridCards);

   const menuItems = resInfo?.cards[1]?.card?.card?.imageGridCards?.info;

  return (
    <div  className="p-3 ">
      <div>
        <h2 className="text-center font-bold text-3xl p-1">Menu</h2>
      </div>
      
       <div  className="flex flex-wrap justify-center ">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className=" p-3  text-center m-3 w-96 shadow-md rounded-lg flex justify-between "
          >
            <div data-testid="resList" className="">
              <h1 className="text-2xl">{item.action?.text} </h1>

              <h3 className=" text-md text-center p-2"> {cost.costForTwo}</h3>
            </div>
            {
              <button
                className="border  p-3  h-14 bg-white text-red-600 text-lg rounded-md hover:bg-gray-300 items-end shadow-lg"
                onClick={() => handleAddItem(item)}
                 
              >
                Add+
              </button>
            }
          </div>
        ))}
      </div> 
    </div>
  );
};
export default RestaurantMenu;
