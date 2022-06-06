import React from "react";
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

import "./GoToCart.css";

const GoToCart = () => {
  return (
    <Link to="/cart">
      <Button variant="danger">Ir al carrito</Button> <Button variant="info">Info</Button>{' '}
    </Link>
  );
};

export default GoToCart;