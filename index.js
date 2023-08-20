import React from "react";
import ReactDOM from "react-dom";

// const heading=React.createElement("h1",{},"this is react")


const Title=()=>(
    <h1 className="head">namaste react</h1>
);
const number="hello";
const HeadingComponent=()=>(
    <div id="container">
        {number}
           <Title />
           <Title></Title>
           {Title()}
           <h1 className="heading">this is react functional component</h1>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);