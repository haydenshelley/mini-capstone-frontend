export function ProductsShow(props) {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <p>Price: ${props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <p>Inventory: {props.product.inventory}</p>
      <p>Buy At: {props.product.supplier.name}</p>
    </div>
  );
}
