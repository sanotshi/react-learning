const Section=()=> {
return (
<div className="section">
        <h1 className="name">Notifications</h1>
        <div className="main">
            <div className="noti-block">
                <div className="noti-header">
                    <h2>New</h2>
                    <button>This week's astrono</button>
                </div>
                <div className="item">
                    <div className="item-content">
                        <div>
                            <img src="./components/profile.jpg" alt="user" className="profile-icon"/>
                        </div>
                        <div className="data">
                            <div className="content-header">
                                <div>
                                    <p>Betelgeuse,a red supergiant star</p> <span>on Betelgeuse-3600 </span>
                                </div>
                                <div className="time">
                                    <span>1 hour ago</span>
                                    <div className="dot-icon"></div>
                                </div>
                            </div>
                            <div className="content-footer">
                                <p>it's amazing,thanks for sharing!</p>
                                <div className="buttons">
                                    <button className="">Like </button>
                                    <button className="">Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="item">
                    <div className="item-content">
                        <div>
                            <img src="./components/profile.jpg" alt="user" className="profile-icon"/>
                        </div>
                        <div className="data">
                            <div className="content-header">
                                <div>
                                    <p>Sirius,the brightest star in the night</p> <span>sky on Sirius-3600</span>
                                </div>
                                <div className="time">
                                    <span>1 hour ago</span>
                                    <div className="dot-icon"></div>
                                </div>
                            </div>
                            <div className="content-footer">
                                <p>it's fascinating,thanks for the information!</p>
                                <div className="buttons">
                                    <button className="">Like </button>
                                    <button className="">Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>

            </div>
            <div className="filters">
                <div className="name2">
                    <h2>Filter</h2>
                    <div className="main-checkbox">
                        <p>Comments</p>
                        <input type="checkbox" className="box"/>
                    </div>
                    <div className="main-checkbox">
                        <p>Likes</p>
                        <input type="checkbox" className="box"/>
                    </div>
                    <div className="main-checkbox">
                        <p>Review</p>
                        <input type="checkbox" className="box"/>
                    </div>
                    <div className="main-checkbox">
                        <p>Mentions</p>
                        <input type="checkbox" className="box"/>
                    </div>
                    <div className="main-checkbox">
                        <p>Purchases</p>
                        <input type="checkbox" className="box"/>
                    </div>
                    <div className="main-checkbox">
                        <p>Message</p>
                        <input type="checkbox" className="box"/>
                    </div>
                    <div className="main-button3">
                        <button className="button2">Select all</button>
                        <button className="button3">Unselect all</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }
    export default Section;