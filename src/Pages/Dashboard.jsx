import { useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getStoredReadList, getStoredWishList } from "../Components/Util/Util";

const Dashboard = () => {
  const allProducts = useLoaderData();
  const [carts, setCarts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const loadCartAndWishlist = () => {
      // Load cart items from local storage and convert IDs to integers
      const storedCartList = getStoredReadList().map(id => parseInt(id, 10));
      const cartList = allProducts.filter(product => storedCartList.includes(product.id));
      setCarts(cartList);

      // Load wishlist items from local storage and convert IDs to integers
      const storedWishlist = getStoredWishList().map(id => parseInt(id, 10));
      const wishlistItems = allProducts.filter(product => storedWishlist.includes(product.id));
      setWishlist(wishlistItems);
    };

    loadCartAndWishlist();
  }, [allProducts]);

  return (
    <>
      <div className="text-center py-10 pb-40 mb-10">
        <h1 className="text-5xl font-bold">Dashboard</h1>
        <p>Explore the latest gadgets that will take your experience to the next level.</p>

        <div className="space-x-6 mt-12">
          <NavLink to="cart" className={({ isActive }) => (isActive ? 'bg-red-600' : '')}>Cart</NavLink>
          <NavLink to="wishlist" className={({ isActive }) => (isActive ? 'bg-red-600' : '')}>Wishlist</NavLink>
        </div>
      </div>

      <Outlet context={{ carts, wishlist }} />
    </>
  );
}

export default Dashboard;
