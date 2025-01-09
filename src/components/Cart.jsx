import React from "react";
import CartItem from "./CartItem";
import {ShoppingCart}  from "phosphor-react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h3> Your Cart</h3>
      <h1>
        <ShoppingCart />
      </h1>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
      <h2>Total: £ {total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
