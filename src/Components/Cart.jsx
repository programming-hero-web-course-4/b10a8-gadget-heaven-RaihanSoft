import { RxCross2 } from "react-icons/rx";
import { useOutletContext, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { removeFromStoredReadList } from "./Util/Util";
import { clearLocalStorage } from "./Util/Util"; // Import the clearLocalStorage function

const Cart = () => {
  const { carts, totalCost, updateTotalCost } = useOutletContext();
  const [sortedCarts, setSortedCarts] = useState(carts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Update sortedCarts whenever carts changes
  useEffect(() => {
    setSortedCarts(carts);
  }, [carts]);

  // Sort carts by price in descending order
  const sortByPriceDescending = () => {
    const sorted = [...sortedCarts].sort((a, b) => b.price - a.price);
    setSortedCarts(sorted);
  };

  // Show purchase confirmation modal
  const handlePurchaseClick = () => {
    setIsModalOpen(true);
  };

  // Confirm purchase and clear the cart


  // Close the modal without making a purchase
  const closeModal = () => {
    clearLocalStorage(); // Clear local storage when closing the modal
    setIsModalOpen(false);
    navigate('/'); // Redirect to the home page when closing the modal
  };

  const handleRemoveAndUpdate = (id) => {
    const removedItem = sortedCarts.find(item => item.id === id);
    if (removedItem) {
      const updatedTotalCost = totalCost - removedItem.price; // Calculate new total cost
      updateTotalCost(updatedTotalCost); // Update total cost in the Dashboard
    }
    removeFromStoredReadList(id);
    setSortedCarts((prevSorted) => prevSorted.filter(item => item.id !== id));

    // Dispatch event to update navbar count
    window.dispatchEvent(new Event('cartCountUpdate'));
  };

  return (
    <div className="w-11/12 mx-auto mt-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="flex items-center gap-6">
          <p className="text-2xl font-bold">Total cost: <span className="text-xl">${totalCost.toFixed(2)}</span></p>
          <button className="btn" onClick={sortByPriceDescending}>Sort by Price</button>
          <button
            className="btn"
            onClick={handlePurchaseClick}
            disabled={carts.length === 0 || totalCost === 0} // Disable button if cart is empty or total cost is 0
          >
            Purchase
          </button>
        </div>
      </div>

      {sortedCarts.length > 0 ? (
        sortedCarts.map(item => (
          <div key={item.id} className="grid rounded-xl shadow-md border-2 justify-items-center sm:flex p-5 m-5 gap-4 relative">
            <div className="md:h-32 h-40 sm:w-52 w-full">
              <img className="h-full w-full rounded-xl object-cover" src={item.product_image} alt={item.product_title} />
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

      {/* Modal for Purchase Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p>Your purchase was successful! The total amount is:</p>
            <p className="text-xl font-semibold mt-4">${totalCost.toFixed(2)}</p> {/* Display total cost */}
            <div className="mt-6 flex justify-center gap-4">
              <button onClick={closeModal} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
