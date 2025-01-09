import React, { useState } from "react";
import BookList from "./BookList";
import Cart from "./Cart";
import "./App.css";
import hp1 from "../images/hp1.jpg";
import bb1 from "../images/bb1.jpg";

export const booksData = [
  {
    id: 1,
    title: "Harry Potter",
    author: "JK Rowling",
    price: 9.99,
    image: <img src={hp1} alt={""} />,
  },
  {
    id: 2,
    title: "The Player",
    author: "Boris Becker",
    price: 17.99,
    image: <img src={bb1} alt={""} />,
  },
];

export function addBook(cart, book) {
  return cart.concat([book]);
}

export function removeBookFromCart(cart, itemToRemove) {
  //return cart.filter((item) => item.id !== itemToRemove.id);
  let result = [];
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === itemToRemove.id && !found) {
      found = true;
  } else {
      result.push(cart[i]);
    };


  }
      return result;

}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart(addBook(cart, book));
  };

  const removeFromCart = (itemToRemove) => {
    setCart(removeBookFromCart(cart, itemToRemove));
  };

  return (
    <div className="App">
      <nav className="navbar">WELCOME TO THE BOOK APP</nav>
      <BookList books={booksData} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
