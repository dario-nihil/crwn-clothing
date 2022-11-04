import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ onClick }) => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button onClick={onClick}>GO to CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
