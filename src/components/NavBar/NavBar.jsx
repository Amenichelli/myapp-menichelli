import React from "react";
import "./NavBar.css";
import CartWidget from "../cartWidget";

function NavBar(props){
return(
    <body className="body">
         <div className="menu">
        <h1 className="title">Cúpula</h1>
        <div>
            <ul className="nav">
            <li href="#">Nosotros</li>
            <li href="#">Servicios</li>
            <li href="#">Contacto</li>
            <a href="#" className="cart"><CartWidget /></a>
        </ul>  
        </div>
    </div>
    </body>
)
}
export default NavBar;
