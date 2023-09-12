import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/products">All Products</a> |{" "}
        <a href="/products/new">New Product</a> | <a href="/cart">Cart</a> |{" "}
        <a href="/login">Login</a> | <LogoutLink /> |{" "}
        <a href="/signup">Sign Up</a>
      </nav>
    </header>
  );
}
