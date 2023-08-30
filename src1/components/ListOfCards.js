import About from "./About";
import { useEffect } from "react";
export const ResCards = (props) => {
  console.log(props);
  return (
    <div className="border border-solid bg-gray-100 p-3 mx-2 my-1 hover:bg-gray-300 cursor-pointer">
      <img className="w-44 h-28 rounded-lg" src={props.imaPath} />
      <div className="cards">
        <h2 className="font-bold py-3">{props.resName}</h2>
        <h3 className="">{props.cuisines}</h3>
        <h4 className="font-light">{props.rating} stars</h4>
        <h4 className="font-light">{props.cost} for two</h4>
      </div>
    </div>
  );
};
const ListOfCards = () => {
  // console.log(<ResCards />)
  //  const result=ListOfCards;
  //   console.log(result);
  // useEffect(()=>{
  //     fetchData();
  //       },[]);

  //  const fetchData=async()=>{
  //     const data=await  fetch("http://localhost:1234/about")
  //     console.log(data);
  //  }

  return (
    <div className="flex flex-wrap p-1 ">
      <div
        className="border border-solid bg-gray-100 p-3 mx-2 my-1 hover:bg-gray-300 cursor-pointer"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <label className="absolute bg-black text-white p-1 rounded-lg">
          Promoted
        </label>
        <img
          className="w-44 h-28 rounded-lg"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kwvmoc0nvrzuh5nshk7z"
        />
        <ResCards
          className=""
          resName="Meghan Foods"
          cuisines=" Mandi Biryani,NorthIndia"
          rating="4.4"
          cost="400"
        />
      </div>

      <ResCards
        imaPath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMgwyYRiOUZGgRHMCWcnAhhezj2kcbeL32g&usqp=CAU"
        resName="KFC"
        cuisines="NorthIndia"
        rating="3.8"
        cost="400 "
      />

      <div className="border border-solid bg-gray-100 p-3 mx-2 my-1 hover:bg-gray-300 cursor-pointer">
        <img
          className="w-44 h-28 rounded-lg"
          src="https://b.zmtcdn.com/data/pictures/chains/2/57282/49c881469c886093b90a5aa066c18cfe_featured_v2.jpg"
        />
        <ResCards
          resName="Kannur Food Point"
          cuisines="Kerala Chinese"
          rating="4.0"
          cost="400"
        />
      </div>
      <div className="border border-solid bg-gray-100 p-3 mx-2 my-1 hover:bg-gray-300 cursor-pointer">
        <label className="absolute bg-black text-white p-1 rounded-lg">
          Promoted
        </label>
        <img
          className="w-44 h-28 rounded-xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72Jf1qG7K-zEQYI8MXbgo0QHJC_TrtozPDQ&usqp=CAU"
        />
        <ResCards
          resName="Roti Wala"
          cuisines="HomeFood,NorthIndia"
          rating="3.8"
          cost="400"
        />
      </div>
      <div className="border border-solid bg-gray-100 p-3 mx-2 my-1 hover:bg-gray-300 cursor-pointer">
        <img
          className="w-44 h-28 rounded-lg"
          src="https://b.zmtcdn.com/data/pictures/chains/6/20428596/75d7f2c5d20f6141ce13d6b5cd273578.jpg"
        />
        <ResCards
          resName="Burgers & Wings"
          cuisines="American"
          rating="3.8"
          cost="400"
        />
      </div>
      <div className="border border-solid bg-gray-100 p-3 mx-2 my-1 hover:bg-gray-300 cursor-pointer">
        <img
          className="w-44 h-28 rounded-lg"
          src="https://b.zmtcdn.com/data/pictures/chains/2/19457932/1ca1984690726b8ce1dfaa046fbe26a4.jpg"
        />
        <ResCards
          resName="Call Me Chow"
          cuisines="Chinese,pan-asian"
          rating="4.3"
          cost="400"
        />
      </div>
      <div className="border border-solid bg-gray-100 p-3 mx-2 my-1 hover:bg-gray-300  cursor-pointer">
        <img
          className="w-44 h-28 rounded-lg"
          src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/06/23145401/23062017_Madinah_07.jpg"
        />
        <ResCards
          resName="Madeena Hotel"
          cuisines="Biryani,Indian"
          rating="4.1"
          cost="250"
        />
      </div>
      <div className="border border-solid bg-gray-100 p-3 mx-2 my-1 hover:bg-gray-300 cursor-pointer">
        <img
          className="w-44 h-28 rounded-lg"
          src="https://b.zmtcdn.com/data/pictures/9/18807829/4d2ff54987984aefe4c2229bdc4b4b71.jpg"
        />
        <ResCards
          resName="Bengali Fun Foods"
          cuisines="NorthIndia"
          rating="4.1"
          cost="300"
        />
      </div>
      <div className="border border-solid bg-gray-100 p-3 mx-2 my-1 hover:bg-gray-300 cursor-pointer">
        <img
          className="w-44 h-28 rounded-lg"
          src="https://img.restro.app/frontend/images/categories/1_1631802043.jpg"
        />
        <ResCards
          resName="Biryani Pot"
          cuisines="NorthIndia,Biryani"
          rating="3.8"
          cost="500"
        />
      </div>
      <div className="border border-solid bg-gray-100 p-3 mx-2 my-1 hover:bg-gray-300 cursor-pointer">
        <label className="absolute bg-black text-white p-1 rounded-lg">
          Promoted
        </label>
        <img
          className="w-44 h-28 rounded-lg"
          src="https://www.aldaaz.com/images/gallery/IMG_1227.jpg"
        />
        <ResCards
          resName="AI Daaz"
          cuisines="American,Arabian"
          rating="4.3"
          cost="400"
        />
      </div>
    </div>
  );
};

export default ListOfCards;
