import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddtoCart, removeFromCart } from '../redux/action';

const Cart = () => {
 const cartData=useSelector((state)=>state.cartData);
 const dispatch=useDispatch();
const plus=(item)=>{
dispatch(AddtoCart(item));

}

const minus=(item)=>{  
dispatch(removeFromCart(item.id))
}
  return (
    <div>
        {cartData.length?<h1 className='my-2'>Cart Page</h1>:(
        <>
        <Link to="/">
        <button>Go to Product Page</button>
        
        </Link>
        <h1 className='mx-5'>Add Items In Your Cart</h1>
        </>)}
    <div className='cart-page-container d-flex flex-column align-items-center'>
    {cartData.length>=1 && cartData.map((item,index)=>{
      return(<div key={index} style={{width:"33%" , height:"40%"}} >  
      <div className="product-item  my-5" >
      <img src={item.image} alt={item.title}style={{width:"calc(6vw + 100px)"}} />
      </div>
        <div><span className="fw-bold">Tittle:</span> {item.title}</div>
        <div><span className="fw-bold">Category:</span>{item.category}</div>
        <div className='fw-bold'><span className="fw-bold">TOTAL PRICE</span>${item.price}*{item.qty}=${item.price*item.qty}</div>
        <div>
        <button className='btn btn-info mx-2 my-2 col-2' onClick={()=>minus(item)}>-</button>
        <button className='btn btn-sucess col-1'>{item.qty}</button>
        <button className='btn btn-danger mx-2 my-2 col-2' onClick={()=>plus(item)}>+</button>
        </div>
        <button onClick={() => dispatch(removeFromCart(item.id))} className="btn btn-primary col-6">Remove from cart</button>
      </div>
    )}
    )
  }

    </div>
    </div>
  )
}

export default Cart;