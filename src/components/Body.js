import RestaurantCard from "./RestaurantCard";

const Body=()=>{
    return(
    <div>
        <div className="justify-items-center">
            <input className="border border-black p-1 rounded-lg m-1 w-56 cursor-pointer" type="text"/>
            <button className="border  p-1  bg-pink-200 cursor-pointer rounded-md">Search</button>
        </div>
<div className="flex flex-wrap">
    
<RestaurantCard />

</div>
</div>
    )
}
export default Body;