import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = (item) => {
    clearItemFromCart(item);
  };

  const addItemToCartHandler = (item) => {
    addItemToCart(item);
  };

  const removeItemFromCartHandler = (item) => {
    removeItemFromCart(item);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => removeItemFromCartHandler(cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCartHandler(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemHandler(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
