
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import { createBrowserRouter,RouterProvider,Outlet,Link } from "react-router-dom";

const App=()=>{
    return (
        <div>
        <Header />
        <Outlet />
        {/* <Body /> */}
        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />,
            },

        ],
         errorElement:<Error/>,
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);