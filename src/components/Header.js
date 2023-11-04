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
    <div className="border  flex justify-between items-center  shadow-lg rounded-lg">
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
          <div className="flex m-3 ">
            <div className="p-1">
            <li class="material-symbols-outlined">
              <Link to="/cart">shopping_cart </Link>
            </li>
            </div>
            <li className="text-xl"> ({cartItems.length} items)</li>
          </div>
          <div className="m-3">
          <button
            className="border px-4 py-1 bg-blue-500 text-lg text-white"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Header;
