import {Link} from "react-router-dom";
const Header=()=>{
    return (
        <div className="head">
            <div className="logo">
                <img className="logo" src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"/>
            </div>
            <div className="navItems">
                <ul>
                    <li> 
                        <Link to="/">Home</Link>
                    </li>
                    <li><a href="/about">About us</a></li>
                    <li>Contacts</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;