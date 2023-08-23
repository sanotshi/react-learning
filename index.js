import React from "react";
import ReactDOM from "react-dom";
import { Assignment } from "./src/assignment";

const number="hello";
const Index=()=>(
    <Assignment/>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);