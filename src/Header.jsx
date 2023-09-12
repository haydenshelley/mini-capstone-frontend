import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/products">All Products</a> |{" "}
        <a href="/new_product">New Product</a> | <a href="/cart">Cart</a> |{" "}
        <a href="/login">Login</a> | <LogoutLink /> |{" "}
        <a href="/signup">Sign Up</a>
      </nav>
    </header>
  );
}
