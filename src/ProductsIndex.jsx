import { useState } from "react";

export function ProductsIndex(props) {
  const [sortOrder, setSortOrder] = useState(1);
  const toggleSortOrder = () => {
    setSortOrder(sortOrder * -1);
    console.log(sortOrder);
  };

  return (
    <div>
      <h2>All Products</h2>
      <button onClick={toggleSortOrder}>Sort by Price</button>
      {[]
        .concat(props.products)
        .sort((a, b) =>
          parseInt(a.price, 10) > parseInt(b.price, 10) ? sortOrder : -sortOrder
        )
        .map((product) => (
          <div key={product.id}>
            <h3>
              {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
            </h3>
            <p>Price: ${product.price}</p>
            {product.images.map((image) => (
              <div key={image.id}>
                <img src={image.url}></img>
              </div>
            ))}
            {/* <button onClick={() => props.onShowProduct(product)}>
            More Info
          </button> */}
            <a href={`/products/${product.id}`}>More Info</a>
            <br />
            <hr />
          </div>
        ))}
    </div>
  );
}
