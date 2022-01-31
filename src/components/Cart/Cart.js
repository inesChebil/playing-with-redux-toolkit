import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.products.choosedItems);
  const listToPurchase = cartItems.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={{
          title: item.title,
          quantity: item.quantity,
          total: item.price * item.quantity,
          price: item.price,
          id: item.id,
        }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{listToPurchase}</ul>
    </Card>
  );
};

export default Cart;
