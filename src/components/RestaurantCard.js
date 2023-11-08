import { CDN_URL } from "../utilities/constants";

const RestaurantCards = (props) => {
  const { resData } = props;
  // console.log(resData);
  
  // const {name,cuisines,avgRating,cloudinaryImageId}=resData.data;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData.info;
  return (
    <div className=" m-2 p-3 shadow-lg cursor-pointer bg-white hover:bg-gray-300 w-56  h-96  rounded-lg">
      <img className="w-56 rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h1 className="text-xl p-1">{name}</h1>
      <h2 className="text-md p-1">{cuisines.join(" , ")}</h2>
      <h4 className="p-1 ">{costForTwo}</h4>
      <h3 className="p-1">{avgRating} stars</h3>
      <h4 className="p-1">30 minutes</h4>
    
    </div>
  );
};

export default RestaurantCards;
