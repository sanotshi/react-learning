import React from "react";

class UserClass extends React.Component{
     constructor(props){
    super(props)
     console.log(props)
     this.state={
        userInfo:{
            // name:"Dummy",

            // location:"Default",
        },
     };
     }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/SantoshiTolapi");
        const json=await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);

        this.timer=setInterval(()=>{
            console.log("namastey")
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        const{count,count1}=this.state;
        const {login,id}=this.state.userInfo;
        return(
            <div className="User-card">
                <h1>this is class based component</h1>
                {/* <h2>count:{count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        count1:this.state.count1+1,
                    })
                }}>count increase</button> */}
                <h2>count1:{count1}</h2>
                <h2>name:{login}</h2>
                <h3>location:{id}</h3>
            </div>
        )
    }
}
export default UserClass;