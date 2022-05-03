import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import Nosotros from "../../pages/main/Nosotros";
import CartWidget from "../cartWidget";

function NavBar(){       
return(
    <body className="body">
         <div className="menu">
        <div>
            <ul className="nav">
            <div><img src={require("./logo/logo.png")} alt="main logo" className="logo"/></div>
            <li><NavLink to={"/Nosotros"} className={
            nav => nav.isActive ? "nav-active" : ""}>Nosotros </NavLink> </li>
            <li><NavLink to={"/category/pizza"} className={
            nav => nav.isActive ? "nav-active" : ""}>Nuestas Pizzas</NavLink></li>
            <li><NavLink to={"/category/burger"} className={
            nav => nav.isActive ? "nav-active" : ""}>Nuestras hamburguesas</NavLink></li>
            <div><a href="#" className="cart"><CartWidget /></a></div>
        </ul>  
        </div>
    </div>
    </body>
)
}
export default NavBar;
