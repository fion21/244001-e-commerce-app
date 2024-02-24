// Cart component

const Cart = ({ cartItems }) => {
  return (
    <div className="book-card">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.id} - £{item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
