import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={""} />
      <div>
        <h3>{item.title}</h3>
        <p>£{item.price}</p>
      </div>
      <button className="button" onClick={() => removeFromCart(item)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
