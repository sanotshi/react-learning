// import LOGO from "../components/LOGO";
import profile from '../assets/Profile.jpg'

const TopNav=()=>{
    return (
<div class="topnav">
<div class="search-container">
    <form>
        <input type="text" placeholder="Search for stars and plants" class="search"/>
    </form>
</div>

<div class="icon-container">

    <button class="button nav-button">Create</button>
     {/* <button type="submit"><i class="fa fa-search"></i></button>  */}
    <div class=" nav-icon">
        <span class="material-symbols-outlined">
            search
        </span>
        <div class="dot-icon"></div>
    </div>
    <div class="nav-icon">

        <span class="material-symbols-outlined">
            notifications
        </span>
        <div class="dot-icon"></div>
    </div>
    <div class="nav-icon">
        <img src={profile} alt="user" class="profile-icon"/>
    </div>
</div>
</div>
    )
    };
    
export default TopNav;