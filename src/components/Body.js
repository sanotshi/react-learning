import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utilities/constants";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Body = () => {
  //   const [listOfRestaurant, setListOfRestaurant] = useState(resList);  //if remove resList give state array will empty so UI only displaying fetch data
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log(listOfRestaurant)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    // console.log(json.data.cards[2].card.card.gridElements);
    // console.log(json.data.cards[1].card.card.gridElements);
    const restra =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(restra);
    setFilteredRestaurant(restra);
    //  setListOfRestaurant(restra ? restra : listOfRestaurant);
  };

  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks Like You,re Offline!! Please Check Your Internet Connection</h1>
    );

  if (filteredRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="flex justify-center m-4">
        <div>
          <input
            className="border border-black p-1 rounded-lg w-56 cursor-pointer"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border p-1 cursor-pointer border-black bg-gray-100 rounded-md hover:bg-gray-300"
            onClick={() => {
              // const filteredRestaurant = listOfRestaurant.filter((res) =>
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border mx-12 p-1 px-2 bg-gray-100 cursor-pointer hover:bg-gray-200 "
          onClick={() => {
            //  const filtered = listOfRestaurant.filter(
            const filtered = filteredRestaurant.filter(
              (res) => res.info?.avgRating > 4
            );
            setFilteredRestaurant(filtered);
            // setListOfRestaurant(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* (  {listOfRestaurant.map((restaurants) => */}
        {filteredRestaurant.map((restaurants) => (
          <Link
            key={restaurants.info?.id}
            to={"/restaurant/" + restaurants.info?.id}
          >
            <RestaurantCard resData={restaurants} />
          </Link>
          //   <RestaurantCard key={restaurants.data.id} resData={restaurants} />
        ))}
        ;
      </div>
    </div>
  );
};
export default Body;
