import { RxCross2 } from "react-icons/rx";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const Cart = () => {
  const { carts, handleRemoveFromCart, totalCost } = useOutletContext();
  const [sortedCarts, setSortedCarts] = useState(carts);

  // Sync sortedCarts with carts whenever carts changes
  useEffect(() => {
    setSortedCarts(carts);
  }, [carts]);

  // Function to sort carts by price in descending order
  const sortByPriceDescending = () => {
    const sorted = [...sortedCarts].sort((a, b) => b.price - a.price);
    setSortedCarts(sorted);
  };

  // Modified remove function to update sortedCarts as well
  const handleRemoveAndUpdate = (id) => {
    handleRemoveFromCart(id);
    setSortedCarts((prevSorted) => prevSorted.filter(item => item.id !== id));
  };

  return (
    <div className="w-11/12 mx-auto mt-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Cart</h1>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-2xl font-bold">Total cost: <span className="text-xl">${totalCost.toFixed(2)}</span></p>
          <button className="btn" onClick={sortByPriceDescending}>Sort by Price</button>
          <button className="btn">Purchase</button>
        </div>
      </div>

      {sortedCarts.length > 0 ? (
        sortedCarts.map(item => (
          <div key={item.id} className="grid rounded-xl shadow-md border-2 justify-items-center sm:flex p-5 m-5 gap-4 relative">
            <div className="md:h-32 h-40 sm:w-52 w-full">
              <img className="h-full w-full rounded-xl object-cover" src={item.product_image} alt="" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">{item.category}</h2>
              <p>{item.description}</p>
              <p className="font-medium text-lg">Price: $ {item.price}</p>
            </div>
            <div onClick={() => handleRemoveAndUpdate(item.id)} className="hover:cursor-pointer absolute right-10 border-red-500 rounded-full border-2">
              <RxCross2 size={30} color="red" />
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default Cart;
