

const MenuList=()=>{
    const ResCards=(props)=> {
        return (
            <div className="cards">
                 <h2 className="font-bold py-3">{props.resName}</h2>
                 <h3 className="">{props.cuisines}</h3>
                 <h4 className="font-light">{props.rating} stars</h4>
                 <h4 className="font-light">{props.cost} for two</h4>
    
            </div>
        )
    }
    return (
    <div className="menuList">
        <h1>hello</h1>
        <h2>this is menu list</h2>
        <ResCards className=""
        resName="Meghan Foods"
                  cuisines=" Mandi Biryani,NorthIndia"
                  rating="4.4"
                  cost="400"
       />
    </div>
    )
}
export default MenuList;