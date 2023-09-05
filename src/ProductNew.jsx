export function ProductNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onProductsCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h2>New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Inventory: <input name="inventory" type="text" />
        </div>
        <div>
          Supplier ID: <input name="supplier_id" type="text" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
