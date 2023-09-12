import axios from "axios";
import { useEffect, useState } from "react";

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([]);

  const getCartedProducts = () => {
    axios.get("http://localhost:3000/carted_products.json").then((response) => {
      console.log(response.data);
      setCartedProducts(response.data);
    });
  };

  const buy = () => {
    axios.post("http://localhost:3000/orders.json").then((response) => {
      console.log(response.data);
      window.location.href = "/products";
    });
  };

  useEffect(getCartedProducts, []);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartedProducts.map((cartedProduct) => (
        <div key={cartedProduct.id}>
          <p>
            Item:{" "}
            {cartedProduct.product.name.charAt(0).toUpperCase() +
              cartedProduct.product.name.slice(1)}
          </p>
          <p>Quantity: {cartedProduct.quantity}</p>
          <hr />
        </div>
      ))}
      <button onClick={buy}>Checkout</button>
    </div>
  );
}
