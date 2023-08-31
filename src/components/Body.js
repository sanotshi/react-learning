import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import resList from "../utilities/mockDatas";

const Body = () => {
//   const [listOfRestaurant, setListOfRestaurant] = useState(resList);  //if remove resList give state array will empty so UI only displaying fetch data
const [listOfRestaurant, setListOfRestaurant] = useState([]);

useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[2].card.card.gridElements);
    // console.log(json.data.cards[1].card.card.gridElements);
    const restra = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
     setListOfRestaurant(restra);
    //  setListOfRestaurant(restra ? restra : listOfRestaurant);
  };

  if(listOfRestaurant.length===0){
    return <Shimmer />
  }

  return (
    <div>   
      <div className="flex justify-center m-4">
        <input
          className="border border-black p-1 rounded-lg w-56 cursor-pointer"
          type="text"
        />
        <button className="border p-1 bg-pink-300 cursor-pointer rounded-md">
          Search
        </button>
        <button
          className="border mx-12 p-1 px-2 bg-gray-100 cursor-pointer hover:bg-gray-300 "
          onClick={() => {
            const filtered = listOfRestaurant.filter(
                //   (res) => res.data.avgRating > 4
                (res) => res.info?.avgRating > 4
            );
            setListOfRestaurant(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {listOfRestaurant.map((restaurants) => (
          <RestaurantCard key={restaurants.info?.id} resData={restaurants} />
        //   <RestaurantCard key={restaurants.data.id} resData={restaurants} />
        ))}
        ;
      </div>
    </div>
  );
};
export default Body;
