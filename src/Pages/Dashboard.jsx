import { useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData, useNavigate, useLocation } from "react-router-dom";
import { getStoredReadList, getStoredWishList, removeFromStoredReadList, removeFromStoredWishList } from "../Components/Util/Util";

const Dashboard = () => {
  const allProducts = useLoaderData();
  const [carts, setCarts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [totalCost, setTotalCost] = useState(0); 

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadCartAndWishlist = () => {
      const storedCartList = getStoredReadList().map(id => parseInt(id, 10));
      const cartList = allProducts.filter(product => storedCartList.includes(product.id));
      setCarts(cartList);

      // Calculate initial total cost
      const initialTotalCost = cartList.reduce((acc, product) => acc + product.price, 0);
      setTotalCost(initialTotalCost);

      const storedWishlist = getStoredWishList().map(id => parseInt(id, 10));
      const wishlistItems = allProducts.filter(product => storedWishlist.includes(product.id));
      setWishlist(wishlistItems);
    };

    loadCartAndWishlist();
  }, [allProducts]);

  const handleRemoveFromCart = (id) => {
    setCarts(prevCarts => {
      const updatedCarts = prevCarts.filter(item => item.id !== id);
      const removedProduct = prevCarts.find(item => item.id === id);
      if (removedProduct) {
        // Adjust total cost
        setTotalCost(prevTotal => prevTotal - removedProduct.price);
      }
      // Dispatch event to update navbar
      window.dispatchEvent(new Event('cartCountUpdate'));
      return updatedCarts;
    });
    removeFromStoredReadList(id);
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist(prevWishlist => {
      // Dispatch event to update navbar
      window.dispatchEvent(new Event('wishlistCountUpdate'));
      return prevWishlist.filter(item => item.id !== id);
    });
    removeFromStoredWishList(id);
  };

  // Function to update total cost
  const updateTotalCost = (newTotalCost) => {
    setTotalCost(newTotalCost);
  };

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      navigate('cart');
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <div className="text-center py-10 bg-prime">
        <h1 className="text-5xl font-bold text-white">Dashboard</h1>
        <p className="text-white mt-3">
          Explore the latest gadgets that will take your experience to <br />
          the next level. From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="my-4 w-full flex flex-col md:flex-row items-center justify-center gap-3">
          <NavLink to="cart" className={({ isActive }) => isActive ? 'btn rounded-full border-2 px-8 py-2 text-prime font-bold' : 'border-2 font-bold text-white rounded-full px-8 py-2'}>
            Cart
          </NavLink>
          <NavLink to="wishlist" className={({ isActive }) => isActive ? 'btn rounded-full border-2 px-8 py-2 text-prime font-bold' : 'border-2 font-bold text-white rounded-full px-8 py-2'}>
            Wishlist
          </NavLink>
        </div>
      </div>

      <Outlet context={{ 
        carts, 
        wishlist, 
        handleRemoveFromCart, 
        handleRemoveFromWishlist, 
        totalCost, 
        updateTotalCost // pass this function down
      }} />
    </>
  );
};

export default Dashboard;
