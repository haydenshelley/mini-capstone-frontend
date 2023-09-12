import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function SeparateProductsShow() {
  const params = useParams();
  const [product, setProduct] = useState({});

  const handleSeparateProductShow = () => {
    console.log("handling separate show page");
    axios
      .get(`http://localhost:3000/products/${params.id}.json`)
      .then((response) => {
        setProduct(response.data);
      });
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/carted_products.json", params)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/products";
      });
  };

  useEffect(handleSeparateProductShow, []);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <p>Inventory: {product.inventory}</p>
      <form onSubmit={handleAddToCart}>
        <div>
          Quantity: <input name="quantity" type="number" />
          <input name="product_id" type="hidden" defaultValue={product.id} />
        </div>
        <br />
        <button>Add to Cart</button>
      </form>
    </div>
  );
}
