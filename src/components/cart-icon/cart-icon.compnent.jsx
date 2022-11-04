import { useContext } from "react";

import { ReactComponent as Shoppingicon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = ({ onClick }) => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={setIsCartOpen.bind(this, !isCartOpen)}
    >
      {<Shoppingicon className="shopping-icon" />}
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
