import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li><Link to="/products/p1">A book</Link></li>
        <li><Link to="/products/p2">An online course</Link></li>
        <li><Link to="/products/p3">A carpet</Link></li>
      </ul>
    </section>
  );
};

export default Products;
