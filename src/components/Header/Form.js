import React, { useState ,useContext} from "react";
import Cart from "./Cart";
import { Button } from "bootstrap";
import CartContext from "../Cart/CartContext";

const Form=()=>{
    const CartCtx = useContext(CartContext);
       const[name,setName]=useState('');
       const nameHandler=(e)=>{
       setName(e.target.value);
       };

       const[description,setDescription]=useState('');
       const descriptionHandler=(e)=>{
        setDescription(e.target.value);
       };

       const[price,setprice]=useState('');
       const priceHandler=(e)=>{
        setprice(e.target.value);
       };

       const[quantity,setQuantity]=useState('');
       const quantityHandler=(e)=>{
        setQuantity(e.target.value);
       };
       const submitHandler = (e) => {
        e.preventDefault();
  
        const products = {
          productName: name,
          description: description,
          price: price,
          quantity: quantity
        };
        CartCtx.addProduct(products);
      };
    return (
        <>
            <div style={{textAlign:'center'}}>TshirtShopers</div>
            <div style={{textAlign:'center'}}>
            <form onSubmit={submitHandler}>
                  <div>
                    <label>Product name</label>
                    <input type="text" required name="product" onChange={nameHandler} value={name}></input>
                   </div>

                   <div>
                   <label>Description</label>
                    <input type="text" required name="decription" onChange={descriptionHandler} value={description}></input>
                   </div>

                    <div>
                    <label>price</label>
                    <input type="number" required name="price" onChange={priceHandler} value={price}></input>
                    </div>

                    <div>
                    <label>Quantity</label>
                    <input type="number" required name="quantity" onChange={quantityHandler} value={quantity}></input>
                    </div>

                   <div>
                   <button type="submit">Add Product</button>
                   </div>

            
            </form>
            </div>
            
        </>
    )
}
export default Form;