import { useEffect } from "react";
import UserClass from "./UserClass";

const Contact = () => {
  // console.log("parent");
  // useEffect(() => {
  //   fetchItem();
  // }, []);
  // const fetchItem = async () => {
  //   const data = await fetch(
  //     "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  // };

  return (
    <div>
      <h3 className="p-4 m-4 font-bold text-xl">Contact Details</h3>
      {/* <UserClass name="sanjana" /> */}
      <input type="text" placeholder="name" className="border border-black p-3 m-4"/>
      <input type="text" placeholder="message"className="border border-black p-3 m-4"/>
      <button className="border border-black bg-slate-300 rounded-lg p-3">submit</button>
    </div>
  );
};
export default Contact;
