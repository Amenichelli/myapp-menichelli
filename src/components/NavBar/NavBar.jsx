import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
// import {logo} from "./logo/logo.png"
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import CartWidget from "../cartWidget/CartWidget";
import { useCartContext } from "../../store/CartContextProvider.jsx";

function NavBar(){       
    const { totalCount } =useCartContext();
return(
    <Navbar className="navigate" collapseOnSelect expand="lg"  variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img src={require("./logo/logo.png")} alt="main logo" className="logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      <button type="button" class="btn btn-dark" className="btn-link" >
          <NavLink to={"/Nosotros"} className={ nav => nav.isActive ? "nav-active" : ""}>Nosotros</NavLink>
        </button>
        <button type="button" class="btn btn-dark" className="btn-link">
            <NavLink to={"/category/pizza"} className={
              nav => nav.isActive ? "nav-active" : ""} >Nuestas Pizzas</NavLink>
              </button>
              <button type="button" class="btn btn-dark" className="btn-link">
               <NavLink to={"/category/burger"} className={
              nav => nav.isActive ? "nav-active" : ""}>Nuestras hamburguesas</NavLink>    
              </button>
              <div >
                 <a href="#" className="cart">
                    {totalCount() > 0 && <CartWidget />} 
                </a>  
              </div>
               
               
             
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
)}
      
        


{/* <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <NavLink to={"/Nosotros"} className={
            nav => nav.isActive ? "nav-active" : ""}>Nosotros </NavLink>
  </Nav.Item>
   <Nav.Item as="li">
    <NavLink to={"/category/pizza"} className={
            nav => nav.isActive ? "nav-active" : ""}>Nuestas Pizzas</NavLink>
  </Nav.Item>
  <Nav.Item as="li">
    <NavLink to={"/category/burger"} className={
            nav => nav.isActive ? "nav-active" : ""}>Nuestras hamburguesas</NavLink>
  </Nav.Item>
  <Nav.Item as="li">
     <a href="#" className="cart">{totalCount() > 0 && <CartWidget />} </a> 
</Nav> */}

export default NavBar;

{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink to={"/Nosotros"} className={
            nav => nav.isActive ? "nav-active" : ""}>Nosotros </NavLink>
        <NavLink to={"/category/pizza"} className={
            nav => nav.isActive ? "nav-active" : ""}>Nuestas Pizzas</NavLink>
        <NavLink to={"/category/burger"} className={
            nav => nav.isActive ? "nav-active" : ""}>Nuestras hamburguesas</NavLink>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> */}