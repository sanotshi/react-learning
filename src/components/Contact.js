import { useEffect } from "react";
import UserClass from "./UserClass";

const Contact = () => {
  console.log("parent");
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId"
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div>
      <h3>Contact Details</h3>
      <UserClass name="sanjana" />
    </div>
  );
};
export default Contact;
