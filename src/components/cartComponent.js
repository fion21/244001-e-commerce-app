// Cart component

const Cart = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map((item, index) => (
        <li key={index}>
          £{item.price}
        </li>

      ))}
    </div>
    
  );
};

export default Cart;
