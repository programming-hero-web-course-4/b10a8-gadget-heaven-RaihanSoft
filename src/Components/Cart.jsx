import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { carts } = useOutletContext();

  return (
    <div>
      <h1>Cart</h1>
      {carts.length > 0 ? (
        carts.map(item => (
          <div key={item.id}>
            <h2>{item.category}</h2>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default Cart;
