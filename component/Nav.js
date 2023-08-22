const Nav=()=>{
    return (
        <div className="nav">
            <div className="logo">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/a586d9116324325.605f8b343e11c.jpg" className="logo-icon"></img>
            </div>
            
            <div className="search-bar">
                <input type="text" className="button"placeholder="Search...."/>
            </div>
            <div className="details">
                <ul>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
export default Nav;