export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>{props.product.name}</h1>
      <p>Price: ${props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <p>Inventory: {props.product.inventory}</p>
      <p>Buy At: {props.product.supplier.name}</p>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Price:{" "}
          <input defaultValue={props.product.price} name="price" type="text" />
        </div>
        <div>
          Description:{" "}
          <input
            defaultValue={props.product.description}
            name="description"
            type="text"
          />
        </div>
        <div>
          Inventory:{" "}
          <input
            defaultValue={props.product.inventory}
            name="inventory"
            type="text"
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}
