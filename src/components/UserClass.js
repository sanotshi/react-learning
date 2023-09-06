import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "dummy",
        id: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SantoshiTolapi");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    return (
      <div className="border m-1 p-2 border-black">
        <h1>Name:{this.state.userInfo.login}</h1>
        <h2>id:{this.state.userInfo.id}</h2>
        <h2>Location:hyderabad</h2>
        <h2>Contact:santoshi@gmail.com</h2>
      </div>
    );
  }
}
export default UserClass;

//how to pass props into class based component
// create  super props inside of constructor props
// use this keyword to call it

//when update state variables never update directly.
// inside event create setState then update the state variables
//in above code when you click on count increase button count will be increased.
//if u want to update count2 inside of this.setState u can write count2:this.state.count2+1.
//dont create another setState variable.
///click the button both are increased at a time
