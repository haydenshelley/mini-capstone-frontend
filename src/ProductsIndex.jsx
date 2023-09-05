export function ProductsIndex(props) {
  return (
    <div>
      <h2>All Products</h2>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          {product.images.map((image) => (
            <img src={image.url}></img>
          ))}
        </div>
      ))}
    </div>
  );
}
