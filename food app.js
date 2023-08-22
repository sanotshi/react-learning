import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

const AppLayout=()=>{
return (
    <div className="app">
        <Nav />
        <Header />
        <Main />
        <Footer />
    </div>
);
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);