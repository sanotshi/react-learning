import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import RestrarentMenu from "./components/RestrarentMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

 const FoodApp=()=>{
    return (
        <div className="food">
            <Header />
            <Outlet />
        </div>
    );
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<FoodApp />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/RestrarentMenu/:resId",  //resId means every restrarent have diff resId's
                element:<RestrarentMenu />,
            }
        ],
       
    },
   
])

  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />) ;