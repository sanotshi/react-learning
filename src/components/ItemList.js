// import RestaurantMenu from "./RestaurantMenu";
// import useRestaurantMenu from "../utilities/useRestaurantMenu";

const ItemList=()=>{
    // const resInfo = useRestaurantMenu(resId);
    // const cost =
    // resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]
    //   ?.info;
    // const menuItems = resInfo?.cards[1]?.card?.card?.imageGridCards?.info;
    return(
        
         <div className="flex flex-wrap justify-center ">
         {/* {menuItems.map((item) => (
           <div
             key={item.id}
             className=" p-3  text-center m-3 w-96 shadow-md rounded-lg flex justify-between "
           >
             <div className="">
               <h1 className="text-2xl">{item.action?.text} </h1>

               <h3 className=" text-md text-center p-2"> {cost.costForTwo}</h3>
             </div>
             {
               <button
                 className="border  p-4 h-14 bg-black text-white rounded-md hover:bg-gray-500 items-end"
                 onClick={() => handleAddItem(item)}
                 // console.log("clicked")
              >
                 Add+
               </button>
            }
           </div>
        ))} */}
       </div>
    )
}

export default ItemList;