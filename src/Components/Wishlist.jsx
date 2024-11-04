import { RxCross2 } from "react-icons/rx";
import { useOutletContext } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, handleRemoveFromWishlist } = useOutletContext();

  return (
    <div className="w-11/12 mx-auto mt-6">
      <h1 className="text-2xl font-bold">Wishlist</h1>
      {wishlist.length > 0 ? (
        wishlist.map(item => (
          <div key={item.id} className="grid rounded-xl shadow-md border-2 justify-items-center sm:flex p-5 m-5 gap-4 relative">
            <div className="md:h-32 h-40 sm:w-52 w-full">
              <img className="h-full w-full rounded-xl object-cover" src={item.product_image} alt="" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">{item.category}</h2>
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
    </div>
  );
};

export default Wishlist;
