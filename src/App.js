import "./App.css";
import { useState } from "react";
import hp1 from "./images/hp1.jpg";
import bb1 from "./images/bb1.jpg";
import Books from "./components/BookClass";
import Cart from "./components/cartComponent";

function App() {
  const [bookdata, setBookdata] = useState(Books);

  const [cartItems, setCartItems] = useState(Books);

  const addToCart = (bookk) => {
    setCartItems([...cartItems, bookk]);
  };

  /*  const removeFromCart = (bookk) => {
    const cartRefresh = cartItems.filter(
      (bookk) => bookk.price !== bookk.price
    );
    setCartItems([...cartItems, bookk]);
  }; */

  return (
    <div>
      {bookdata.map((bookk) => {
        return (
          <div className="App">
            <nav className="navbar">WELCOME TO THE BOOK APP</nav>
            <div className="m-4 p-2 w-96 h-96 " />
            <ul> {bookk.image}</ul>
            <div>
              <div className="m-4 p-2 w-96 h-96 ul book-card flex">
                <Cart cartItems={cartItems} />
                <img src={hp1} alt="title2" />
                <button className=" button" onClick={() => addToCart(bookk)}>
                  Add to Cart
                </button>
                {/*     <button onClick={() => removeFromCart(bookk)}>Remove</button> */}
              </div>

              <div className="m-4 p-2 w-96 h-96 ul book-card flex">
                <Cart cartItems={cartItems} />
                <img src={bb1} alt="title2" />
                <button className=" ul button" onClick={() => addToCart(bookk)}>
                  Add to Cart
                </button>
                {/*     <button onClick={() => removeFromCart(bookk)}>Remove</button> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
