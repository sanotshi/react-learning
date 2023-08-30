const RestaurantCards=()=>{
    const ResCards=()=>{
        return(
            <div className="border m-2 p-2 shodow-white-300 cursor-pointer bg-gray-100 hover:bg-gray-300">
                <img className="w-44" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"/>
                <h1 className="text-lg">Meghana Foods</h1>
                <h3 >India,Biryani</h3>
                <h4 className="text-xs">4.4 stars</h4>
                <h4 className="text-xs">30 minutes</h4>
            </div>
        )
    }
    return(
        <div className="">
          <ResCards />
        </div>
    )
}
export default RestaurantCards;