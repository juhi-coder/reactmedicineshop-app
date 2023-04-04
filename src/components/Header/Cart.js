import React,{useState,useContext} from "react";
import CartContext from "../Cart/CartContext";
import { Button } from "bootstrap";
const Cart=()=>{
    const CartCntx=useContext(CartContext);
    const [show,setShow]=useState(false);

    let total=0;
    CartCntx.cartStore.forEach((item)=>{
        total+=Number(item.price);
    });

    const showhandle=()=>{
        setShow(false);
    }
    const handleShow=()=>{
        setShow(true);
    }
return (
    <div>
        <button onClick={showhandle}>CART</button>
        <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
            </tr>
        </thead>
        
        <tbody>
            {CartCntx.cartStore.map((product,index)=>{
                return(
                    <tr key={index}>
                    <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                    </tr>
                )
            })}
        </tbody>
        </table>
        <Button onClick={handleShow}>
            close
        </Button>
        <p>Total amount:${total}</p>
    </div>
)
}
export default Cart;