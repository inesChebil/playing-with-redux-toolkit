import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = (props) => {
  const products = useSelector((state) => state.products.products);

  const productsList = products.map((p) => {
    return (
      <ProductItem
        key={p.id}
        title={p.title}
        price={p.price}
        description={p.description}
        id={p.id}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productsList}</ul>
    </section>
  );
};

export default Products;
