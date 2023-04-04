import React, { useEffect, useState } from "react";

const CartContext = React.createContext();
const CartProvider = (props) => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  let url = "https://crudcrud.com/api/b6db7672c2f44ea0af91a230f7cc9783";

  const getData = async () => {
    try {
      const response = await fetch(`${url}/Medical`);
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const postData = async (products) => {
    try {
      const response = await fetch(`${url}/Medical`, {
        method: "POST",
        body: JSON.stringfy(products),
        headers: {
          "content-type": "application/json",
        },
      });
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const postCartData = async (cartData) => {
    try {
      const response = await fetch(`{url}/list`, {
        method: "POST",
        body: JSON.stringfy(cartData),
        headers: {
          "content-type": "application/json",
        },
      });
      getCartData();
    } catch (err) {
      console.log(err);
    }
  };

  const getCartData = async () => {
    try {
      const response = await fetch(`{url}/list`);
      const data = await response.json(data);
      setCartData(data);
      console.log(cartData, "list");
    } catch (err) {
      console.log(err);
    }
  };

  const addToProductsHandler = (products) => {
    postData(products);
  };

  const addToCartHandler = (newData) => {
    postCartData(newData);
  };

  useEffect(() => {
    getData();
    getCartData();
  }, []);

  const contextValue = {
    productStore: data,
    addProducts: addToProductsHandler,
    cartStore: cartData,
    addToCart: addToCartHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
