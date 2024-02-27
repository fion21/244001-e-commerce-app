
import React from 'react';

const Book = ({ book, addToCart }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>£{book.price}</p>
      <p>{book.image}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
}

export default Book;
