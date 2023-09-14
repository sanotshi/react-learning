import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utilities/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)

  return (
    <div className="border  flex justify-between items-center mx-1 my-2 shadow-lg rounded-lg">
      <div className=" w-36 m-2 cursor-pointer">
        <img className="" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex m-4 cursor-pointer">
          <li className="p-3 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 text-lg">
            <Link to="/about">About us</Link>
          </li>
          <li className="p-3 text-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-3 text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-3 text-lg font-bold">
            <Link to="/cart">Cart - ({cartItems.length}items)</Link>
          </li>
          <button
            className="border px-4 bg-gray-300"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
