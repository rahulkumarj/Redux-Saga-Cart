import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../redux/reducer";
import {Link} from "react-router-dom";
import { emptyCart } from "../redux/action";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch=useDispatch();
  const Products=useSelector((state) => state.productData);

  
  //   this cartData will come from rootreducer
  //   heere state is a variabele like we use in map
  return (
    <>
    <div className="header">

       <Link to="/cart">
       <div className="cart_div">
        <span>{result.length}</span>
        <img
          src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
          alt="cart img"
        />
      <button className="mx-2" onClick={() => dispatch(emptyCart(Products))}>Empty cart</button>
       </div>
      </Link>
     </div>
     </>
  );
};

export default Header;
