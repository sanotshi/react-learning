import { useState,useEffect } from "react";
import useOnlineStatus from "./useOnlineStatus";
import ListOfCards from "./ListOfCards";
import Shimmer from "./Shimmer";

const Body=()=>{
    const[listOfRestra,setListOfRestra]=useState([]);
   const[searchText,setSearchText]=useState("");
    // const[ListOfCards,setListOfCards]=useState([]);
       useEffect(()=>{
         fetchData();
           },[]);
 
       const fetchData=async()=>{
         const data=await fetch("  http://localhost:1234")
        //  console.log(data);
            const json=await data.json();
           console.log(json);
    // //    setListOfCards(json.data)
        }
 
//    if(ListOfCards.length===0){
//      return<Shimmer />;
//       }
    // const onlineStatus = useOnlineStatus();
    // if(onlineStatus === false)
    // return (
    // <h1>Looks like you're offline!! check your internet connection</h1>
    // // );
    //   return ListOfCards.length===0 ? <Shimmer /> :
      return (
        <div className="body">
            <div className="flex">
            <div className="">
                <input type="text" className="border border-solid border-black m-2 cursor-pointer" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)}}/>
                <button className="font-medium bg-green-100 p-1 px-2 rounded-lg cursor-pointer" onClick={()=>{
                    // console.log(searchText);
                    const filteredRestra=listOfRestra.filter((ListOfCards)=>ListOfCards.props.resName.includes(searchText));
                    setListOfRestra(filteredRestra);
                }}>search</button>
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
                 
                   <ListOfCards  />
                
            </div>
        </div>
            )
}
export default Body;