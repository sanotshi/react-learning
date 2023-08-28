import { useState } from "react"
import useOnlineStatus from "./useOnlineStatus";
import ListOfCards from "./ListOfCards";

import {Link} from "react-router-dom";

const Body=()=>{
   
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
    return (
    <h1>Looks like you're offline!! check your internet connection</h1>
    );

      return (
        <div className="body">
            <div className="flex">
            <div className="">
                <input type="text" className="border border-solid border-black m-2 cursor-pointer"/>
                <button className="font-medium bg-green-100 p-1 px-2 rounded-lg cursor-pointer">search</button>
            </div>
        <div className="search">
            <button className=" m-2 mx-10 p-1 border border-solid bg-gray-100 cursor-pointer hover:bg-gray-300" onClick={()=>{console.log("clicked")
            //  const filtered=ListOfCards.filter((resList)=>resList.rating>4);
            //  setListOfCards(filtered);
        }}>
                Top Rated Ratings</button>
                </div>
        </div>
            <div className="">
                 <Link to="/MenuList">
                   <ListOfCards  />
                   </Link> 
            </div>
        
        
        </div>
        
    )
}
export default Body;