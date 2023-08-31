import { LOGO_URL } from "../utilities/constants";
import Body from "./Body";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div className="border  flex justify-between items-center mx-1 my-2 shadow-lg rounded-lg">
        <div className="w-40 m-2 cursor-pointer">
            <img className="" src={LOGO_URL}/>
        </div>
        <div className="">
            <ul className="flex m-4 cursor-pointer">
               {/* <Link to="Body">  */}
                <li className="p-3 text-lg">Home</li>
                {/* </Link> */}
                <li className="p-3 text-lg">About us</li>
                <li className="p-3 text-lg">Contact Us</li>
                <li className="p-3 text-lg">List</li>
            </ul>
            </div> 
        </div>
    )
}
export default Header;