import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ProductNew } from "./ProductNew";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleProductsIndex = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  const handleProductsCreate = (params, successCallBack) => {
    axios
      .post("http://localhost:3000/products.json", params)
      .then((response) => {
        setProducts([...products, response.data]);
        successCallBack;
      });
  };

  useEffect(handleProductsIndex, []);

  return (
    <div>
      <h1>Capstone Store</h1>
      <Login />
      <LogoutLink />
      <ProductsIndex products={products} />
      <ProductNew onProductsCreate={handleProductsCreate} />
      <Signup />
    </div>
  );
}
