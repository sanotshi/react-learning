// import { LOGO } from "../utilities/LOGO";

const Header=()=>{
    return(
        <div className="border border-black flex justify-between items-center m-1">
        <div className="w-44 m-3 cursor-pointer">
            <img src="https://graphicsfamily.com/wp-content/uploads/2020/10/Restaurant-logo-design-free-template-1536x864.jpg"/>
        </div>
        <div className="">
            <ul className="flex m-8 cursor-pointer">
                <li className="p-3 text-lg">Home</li>
                <li className="p-3 text-lg">About us</li>
                <li className="p-3 text-lg">Contact Us</li>
                <li className="p-3 text-lg">List</li>
            </ul>
            </div> 
        </div>
    )
}
export default Header;