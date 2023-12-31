import axios from "axios";
import { useState, useEffect, FC, ReactElement } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { ProductNew } from "./ProductNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductShow";
import { Routes, Route } from "react-router-dom";
import { CartedProductsIndex } from "./CartedProductsIndex";
import { ProductEdit } from "./ProductEdit";
import { SeparateProductsShow } from "./SeparateProductsShow";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

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

  const handleShowProduct = (product) => {
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    setIsProductsShowVisible(false);
  };

  const handleUpdateProduct = (id, params, successCallback) => {
    console.log("handleUpdateProduct", params);
    axios
      .patch(`http://localhost:3000/products/${id}.json`, params)
      .then((response) => {
        setProducts(
          products.map((product) => {
            if (product.id === response.data.id) {
              return response.data;
            } else {
              return product;
            }
          })
        );
        successCallback();
        handleClose();
      });
  };

  const handleDestroyProduct = (product) => {
    axios
      .delete(`http://localhost:3000/products/${product.id}.json`)
      .then((response) => {
        setProducts(products.filter((p) => p.id !== product.id));
        handleClose();
      });
  };

  useEffect(handleProductsIndex, []);

  return (
    <div>
      <h1>Capstone Store</h1>
      <Routes>
        <Route path="/cart" element={<CartedProductsIndex />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id/edit" element={<ProductEdit />} />
        <Route
          path="/products"
          element={
            <ProductsIndex
              products={products}
              onShowProduct={handleShowProduct}
            />
          }
        />
        <Route path="/products/:id" element={<SeparateProductsShow />} />
        <Route
          path="/products/new"
          element={<ProductNew onProductsCreate={handleProductsCreate} />}
        />
      </Routes>
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow
          product={currentProduct}
          onUpdateProduct={handleUpdateProduct}
          onDestroyProduct={handleDestroyProduct}
        />
      </Modal>
    </div>
  );
}
