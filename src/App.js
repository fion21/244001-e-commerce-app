import "./App.css";
import { useState } from "react";
import hp1 from "./images/hp1.jpg";
import bb1 from "./images/bb1.jpg";
import Books from "./components/BookClass";
import Cart from "./components/cartComponent";

function App() {
  const [bookdata, setBookdata] = useState(Books);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (bookk) => {
    setCartItems([...cartItems, bookk]);
  };

  return (
    <div>
      {bookdata.map((bookk) => {
        return (
          <div className="book-card">
            {bookk.image}
            <div>
              <Cart cartItems={cartItems} />
              <button onClick={() => addToCart(bookk)}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
