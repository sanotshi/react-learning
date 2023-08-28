import {Link} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const Header=()=>{
 const [btnName,setBtnNameReact]=useState("Login");
    
    return (
        <div className="flex justify-between m-2 border border-solid border-black bg-pink-200 sm:bg-red-200">
            <div className="">
                <img className="w-48 p-5 cursor-pointer" src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"/>
            </div>
            <div className="">
                <ul className="flex items-center p-5 my-5 font-medium">
                    <li className="p-5 underline text-blue-500"> 
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-5 underline text-blue-500"><a href="/about">About us</a></li>
                    <li className="p-5 cursor-pointer hover:underline">Contacts</li>
                    <li className="p-5 cursor-pointer hover:underline">Cart</li>
                    <button className="border border-black p-1" 
                           onClick={()=>{
                                 setBtnNameReact("Logout");
                       
                                 }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;