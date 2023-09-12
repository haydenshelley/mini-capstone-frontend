import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProductEdit() {
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

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/products/${product.id}.json`, params);
    window.location.href = `/products/${product.id}`;
  };

  const handleDestroyProduct = (event) => {
    axios.delete(`http://localhost:3000/products/${product.id}.json`);
    window.location.href = "/products";
  };

  useEffect(handleSeparateProductShow, []);

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleUpdateProduct}>
        <div>
          Name: <input defaultValue={product.name} name="name" type="text" />
        </div>
        <div>
          Price: <input defaultValue={product.price} name="price" type="text" />
        </div>
        <div>
          Description:{" "}
          <input
            defaultValue={product.description}
            name="description"
            type="text"
          />
        </div>
        <div>
          Inventory:{" "}
          <input
            defaultValue={product.inventory}
            name="inventory"
            type="text"
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
      <br />
      <button onClick={handleDestroyProduct}>Delete Product</button>
    </div>
  );
}
