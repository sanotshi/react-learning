import React from "react";

class UserClass extends React.Component{
    constructor(props){
    super(props)
    console.log(props)
    }
    render(){
        return(
            <div className="User-card">
                <h1>this is class based component</h1>
            </div>
        )
    }
}
export default UserClass;