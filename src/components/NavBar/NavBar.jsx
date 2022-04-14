import React from "react";
import "./NavBar.css";

function NavBar(props){
return(
    <body className="body">
         <div className="menu">
        <h1 className="title">MyApp</h1>
        <ul className="nav">
            <li href="#">Nosotros</li>
            <li href="#">Servicios</li>
            <li href="#">Contacto</li>
        </ul>
    </div>
    </body>
   
)
}
export default NavBar;
