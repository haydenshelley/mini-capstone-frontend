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

  useEffect(getCartedProducts, []);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartedProducts.map((cartedProduct) => (
        <div key={cartedProduct.id}>
          <p>{cartedProduct.product.name}</p>
          <p>{cartedProduct.quantity}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
