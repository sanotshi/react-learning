
import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import { createBrowserRouter,RouterProvider,Outlet,Link } from "react-router-dom";
import {About} from "./components/About";
import { Provider } from "react-redux";
import appStore from "./utilities/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";

const Grocery=lazy(()=>import("./components/Grocery"));

const App=()=>{
    return (
        <Provider store={appStore}>
        <div>
        <Header />
        <Outlet />
        {/* <Body /> */}
        </div>

        </Provider>
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
                path:"/about",
                element:<About nameFromParent="this is get derived from props method" />,
            },
            {
                path:"/grocery",
                element:<Suspense><Grocery /></Suspense>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />,
            },
            {
                path:"/cart",
                element:<Cart />,
            },
        ],
         errorElement:<Error/>,
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);