import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./src/app";
// import { Assignment } from "./src/assignment";


// const number="hello";
// const Index=()=>(
//     <Assignment/>
// );
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Index />);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);