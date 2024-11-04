import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { carts } = useOutletContext();


  return (
    <div className="w-11/12 mx-auto" >

      <div className="flex justify-between ">
        <div>
          <h1>Cart</h1> 
        </div>
        <div className="flex gap-6 ">
          <p>Total cost:999.99</p>
          <button>Sort by Price</button>
          <button>Purchase</button>
        </div>
      </div>

      {carts.length > 0 ? (
        carts.map(item => (
          <div className="border-2 p-5 m-5" key={item.id}>
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
