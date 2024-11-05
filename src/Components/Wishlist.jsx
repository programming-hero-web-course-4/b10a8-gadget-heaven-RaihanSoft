import { RxCross2 } from "react-icons/rx"; 
import { useOutletContext, useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { removeFromStoredWishList } from "./Util/Util";

const Wishlist = () => {
  const { wishlist: initialWishlist } = useOutletContext();
  const [wishlist, setWishlist] = useState(initialWishlist);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setWishlist(initialWishlist);
  }, [initialWishlist]);

  const sortByPriceDescending = () => {
    const sorted = [...wishlist].sort((a, b) => b.price - a.price);
    setWishlist(sorted);
  };

  // const handleRemoveFromWishlist = (id) => {
  //   removeFromStoredWishList(id);
  //   setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== id));
  // };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  const handleRemoveFromWishlist = (id) => {
    removeFromStoredWishList(id);
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== id));

    // Dispatch event to update navbar count
    window.dispatchEvent(new Event('wishlistCountUpdate'));
};


  return (
    <div className="w-11/12 mx-auto mt-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Wishlist</h1>
        <button className="btn" onClick={sortByPriceDescending}>Sort by Price</button>
      </div>

      {wishlist.length > 0 ? (
        wishlist.map(item => (
          <div key={item.id} className="grid rounded-xl shadow-md border-2 justify-items-center sm:flex p-5 m-5 gap-4 relative">
            <div className="md:h-32 h-40 sm:w-52 w-full">
              <NavLink to={`/product/${item.id}`}>
                <img className="h-full w-full rounded-xl object-cover" src={item.product_image} alt={item.product_title} />
              </NavLink>
            </div>
            <div className="space-y-2">
              <NavLink to={`/product/${item.id}`}>
                <h2 className="text-xl font-bold">{item.product_title}</h2>
              </NavLink>
              <p>{item.description}</p>
              <p className="font-medium text-lg">Price: $ {item.price}</p>
            </div>
            <div onClick={() => handleRemoveFromWishlist(item.id)} className="hover:cursor-pointer absolute right-10 border-red-500 rounded-full border-2">
              <RxCross2 size={30} color="red" />
            </div>
          </div>
        ))
      ) : (
        <p>No items in the wishlist.</p>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p>Your purchase from the wishlist was successful!</p>
            <div className="mt-6 flex justify-center gap-4">
              <button onClick={closeModal} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
