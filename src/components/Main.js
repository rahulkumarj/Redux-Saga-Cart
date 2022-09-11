import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddtoCart, emptyCart, removeFromCart } from "../redux/action";
import { productList } from "../redux/productAction";

const Main = () => {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.productData);
  // WE HAVE DATA OF TWO REDUCERS IN USESELECTOR ONE IS CARTDATA AND ANOTHER IS PRODUCTDATA
  // here state is used to get data of whole redux WE ARE NO USING ANY DATA FROM REDUX
  console.log(Products, "Products");
  
  useEffect(()=>{
    dispatch(productList(Products))
    console.log("useEffect is running")  
  },[]);
  
 
  

return (
    <div>
    <div>
      {/* <button onClick={() => dispatch(AddtoCart(Products))}>Add to cart</button> */}
      {/* <button onClick={() => dispatch(removeFromCart(Products))}>
        Remove from cart
      </button> */}
     <h1 className="fw-bold ">PRODUCTS ITEMS</h1>
     </div>
    <div className="product-container d-flex flex-wrap" style={{width:"100vw" , display:"flex" , flexWrap:'wrap'}}>
    {Products.length && Products.map((item,index)=>{
     return(<div  key={index} style={{width:"33%" , height:"40%"}} >  
      <div className="product-item my-5 " >
      <img src={item.image} alt={item.title}  style={{width:"15vw",height:"25vh"}} />
      </div>
        <div><span className="fw-bold">Tittle:</span> {item.title}</div>
        <div><span className="fw-bold">Category:</span> {item.category}</div>
        <div><span className="fw-bold">Price:</span> {item.price}</div>
        
        <button onClick={() => dispatch(AddtoCart(item))}className="btn btn-info mx-2 ">Add to cart</button>
        
        <Link to= "/cart"><button  className="btn btn-sucess mx-2">Go to cart</button></Link>
      </div>
    )}
    )
  }

    </div>
    </div>
  );
};

export default Main;
