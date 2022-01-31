import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";

import { useSelector } from "react-redux";

const CartButton = (props) => {
  const productsInCartQt = useSelector((state) => {
    if (state.products.choosedItems.length === 0) {
      return 0;
    }
    const totalQt = state.products.choosedItems
      .map((p) => p.quantity)
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    return totalQt;
  });
  const dispatch = useDispatch();
  const cartButtonHandler = () => {
    dispatch(cartActions.clickCart());
  };
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{productsInCartQt}</span>
    </button>
  );
};

export default CartButton;
