import React,{Component} from "react";

export  class About extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"this is constructor method"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return {name:props.nameFromParent}
    // }
    // shouldComponentUpdate(){
    //     return true;
    // }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:"this component did mount"})
        },1000)
    }

    componentDidUpdate(prevState){
        if(prevState.name  !== this.state.name){
        document.getElementById("stateChanged").innerHTML="yes state is changed"
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <p id="stateChanged"></p>
            </div>
        )
    }
}

