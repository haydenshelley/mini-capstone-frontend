export function ProductsIndex(props) {
  return (
    <div>
      <h2>All Products</h2>
      {props.products.map((product) => (
        <div key={product.id}>
          <h3>
            {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
          </h3>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          {product.images.map((image) => (
            <div key={image.id}>
              <img src={image.url}></img>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
