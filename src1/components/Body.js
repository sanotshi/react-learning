import { useState } from "react"
import useOnlineStatus from "./useOnlineStatus";

const Body=()=>{
    const ResCards=(props)=> {
        return (
            <div className="cards">
                 <h2>{props.resName}</h2>
                 <h3>{props.cuisines}</h3>
                 <h4>{props.rating} stars</h4>
                 <h4>{props.cost} for two</h4>
    
            </div>
        )
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
    return (
    <h1>Looks like you're offline!! check your internet connection</h1>
    );

    // let [ListOfCards,setListOfCards]=useState([
     const ListOfCards=()=>{
         return(
    <div className="resCard">
            <div className="resList">
            <img className="card-logo"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kwvmoc0nvrzuh5nshk7z"/>
             <ResCards 
             resName="Meghan Foods"
                       cuisines=" Mandi Biryani,NorthIndia"
                       rating="4.4"
                       cost="400"
            />
            </div>
            <div className="resList">
                <img className="card-logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMgwyYRiOUZGgRHMCWcnAhhezj2kcbeL32g&usqp=CAU"/>
                      <ResCards resName="KFC"
                      cuisines="NorthIndia"
                      rating="3.8"
                      cost="400 "
            />
            </div>
            <div className="resList">
                <img className="card-logo"src="https://b.zmtcdn.com/data/pictures/chains/2/57282/49c881469c886093b90a5aa066c18cfe_featured_v2.jpg"/>
            <ResCards resName="Kannur Food Point"
                      cuisines="Kerala Chinese"
                      rating="4.0"
                      cost="400"
            />
            </div>
            <div className="resList">
                <img className="card-logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72Jf1qG7K-zEQYI8MXbgo0QHJC_TrtozPDQ&usqp=CAU"/>
            <ResCards resName="Roti Wala"
                      cuisines="HomeFood,NorthIndia"
                      rating="3.8"
                      cost="400"
            />
            </div>
            <div className="resList">
                <img className="card-logo"src="https://b.zmtcdn.com/data/pictures/chains/6/20428596/75d7f2c5d20f6141ce13d6b5cd273578.jpg"/>
            <ResCards resName="Burgers & Wings"
                      cuisines="American"
                      rating="3.8"
                      cost="400"
            />
            </div>
            <div className="resList">
                <img className="card-logo"src="https://b.zmtcdn.com/data/pictures/chains/2/19457932/1ca1984690726b8ce1dfaa046fbe26a4.jpg"/>
            <ResCards resName="Call Me Chow"
                      cuisines="Chinese,pan-asian"
                      rating="4.3"
                      cost="400"
            />
            </div>
            <div className="resList">
                <img className="card-logo" src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/06/23145401/23062017_Madinah_07.jpg"/>
            <ResCards resName="Madeena Hotel"
                      cuisines="Biryani,Indian"
                      rating="4.1"
                      cost="250"
            />
            </div>
            <div className="resList">
                <img className="card-logo"src="https://b.zmtcdn.com/data/pictures/9/18807829/4d2ff54987984aefe4c2229bdc4b4b71.jpg"/>
            <ResCards resName="Bengali Fun Foods"
                      cuisines="NorthIndia"
                      rating="4.1"
                      cost="300"
            />
            </div>
            <div className="resList">
                <img className="card-logo"src="https://img.restro.app/frontend/images/categories/1_1631802043.jpg"/>
            <ResCards resName="Biryani Pot"
                      cuisines="NorthIndia,Biryani"
                      rating="3.8"
                      cost="500"
            />
            </div>
            <div className="resList">
                <img className="card-logo"src="https://www.aldaaz.com/images/gallery/IMG_1227.jpg"/>
            <ResCards resName="AI Daaz"
                      cuisines="American,Arabian"
                      rating="4.3"
                      cost="400"
            />
            </div>
        </div>
           )
         }
    //  ])
    
    return (
        <div className="body">
            <div className="search">
                <input type="text"/>
                <button className="search">search</button>
            </div>
        <div className="search">
            <button className="filter-btn" onClick={()=>{console.log("clicked")
            //  const filtered=ListOfCards.filter((resList)=>resList.rating>4);
            //  setListOfCards(filtered);
        }}>
                Top Rated Ratings</button>
            <div className="resCard">
                <ListOfCards/>
                
            </div>
        </div>
        
        </div>
        
    )
}
export default Body;