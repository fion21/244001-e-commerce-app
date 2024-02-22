import React, { useState } from "react";
import "./App.css";
import HP1 from "./HP1.jpg";
import bb1 from "./bb1.jpg";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentBook, setCurrentBook] = useState(0);
  const [cart, setCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const books = [
    {
      title: "Harry Potter",
      image: { src: HP1 },
      price: '8.99',
      genre: [{ id: 0, text: "Fiction", isCorrect: true }],
    },

    {
      title: "The Player",
      image: { src: bb1 },
      price:'5.45',
      genre: [{ id: 2, text: "Autobiograpy", isCorrect: true }],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const titleClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setCart(cart + 1);
    }

    if (currentBook + 1 < books.length) {
      setCurrentBook(currentBook + 1);
    } else {
      setShowResults(true);
    }
  };
/* Add items to the cart */
  const addItemToCart = (cart) => {
    // Logic to add item to the cart
    setCart([...currentBook, cart]);

    // Logic to add the total price
    setTotalPrice(totalPrice + currentBook.price);
  }

  const removeItemFromCart = (cart) => {
    // Logic to remove item from the cart
    const updatedCart = cart.filter((cart) => cart.id !== cart.id);
    setCart(updatedCart)

    // Logic to reduce the total price
    setTotalPrice(totalPrice - currentBook.price);
  }



  /* Resets the App */
  const restartPurchase = () => {
    setCart(0);
    setCurrentBook(0);
    setShowResults(false);
    setTotalPrice(0);
  };

  return (
    <React.Fragment>
      <section>
        <div className="App ">
          <div className="App">
            {/* 1. Header  */}
            <h1>Book Shop E-commerce App</h1>

            {/* 2. Current Cart  */}
            <h1>Your Cart: {cart} 🛒 </h1>

            {/* 3. Current book status  */}
            {showResults ? (
              /* 4. Checkout Line Up */
              <div className="checkout-status">
                <h1>Checkout Status </h1>
                <h2>You have {cart} books in your cart</h2>
                <button onClick={() => restartPurchase()}>Reset</button>
                <img src={HP1} alt="HP1" />
                <img src={bb1} alt="bb1" />
              </div>
            ) : (
              /* 5. Book Card  */
              <div className="book-card ">
                {/* Current Book  */}
                <h2>Books added to cart: {currentBook + 1}</h2>
                <h3 className="book-text">{books[currentBook].title}</h3>
                 <h3 className="book-text">{books[currentBook].price}</h3>
                <div>

                {/* Price updated to cart  */}
                <ul>
                    <li key={books[currentBook].id}>{books[currentBook].title} - £{books[currentBook].price}</li>
                  )}
                </ul>

                {/* Display the total price */}
                <p>Total Price: £{totalPrice}</p>
              </div>


                {/* List of books in cart  */}
                <ul>
                  {books[currentBook].genre.map((genre) => {
                    return (

                      <li
                        key={genre.id}
                        onClick={() => titleClicked(genre.isCorrect)}
                      >
                        <img src={HP1} alt="HP1" />

                        {genre.title}
                        <img src={bb1} alt="bb1" />
                      </li>
                    );
                  })}
                </ul>
              </div>
           )}
          </div>
        </div>
      </section>
    </React.Fragment>

  );
}

export default App;
