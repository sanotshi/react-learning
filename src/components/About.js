import React, { Component } from "react";

export class About extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "this is constructor method",
  //   };
  // }
  // static getDerivedStateFromProps(props,state){
  //     return {name:props.nameFromParent}
  // }
  // shouldComponentUpdate(){
  //     return true;
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ name: "this component did mount" });
  //   }, 1000);
  // }

  // componentDidUpdate(prevState) {
  //   if (prevState.name !== this.state.name) {
  //     document.getElementById("stateChanged").innerHTML =
  //       "yes state is changed";
  //   }
  // }
  render() {
    return (
      <div>
      <div>
<h1 className="text-3xl font-bold text-center m-8 p-4 text-red-500">Your Best Services</h1>
      </div>
      <div className="bg-orange-400 ">
        
        {/* <h1>{this.state.name}</h1>
        <p id="stateChanged"></p> */}
    
        <p className="text-2xl text-white m-8 p-16 text-center indent-4">
Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</p>
      </div>
<div className="text-center m-12">
  <h1 className="text-3xl font-bold m-4">What’s In Store For The Future?</h1>
  <h3 className="text-xl m-6 indent-36">Swiggy has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings.</h3>
</div>
<div className="bg-pink-500 p-12">
  <ul className=" flex justify-center p-8 text-2xl text-white">
    <li  className="p-6">Home</li>
    <li className="p-6">Opportunities</li>
    <li className="p-6">The swiggy life</li>
    <li className="p-6">Values at swiggy</li>
  </ul>
  {/* <div>
    <ul>
    <h1>hello</h1>
     <li><i class="fa-brands fa-square-facebook"></i></li> 
    </ul>
  </div> */}
</div>
      </div>
    );
  }
}
