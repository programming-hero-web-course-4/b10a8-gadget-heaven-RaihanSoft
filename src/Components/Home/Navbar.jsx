import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { getStoredReadList, getStoredWishList } from "../Util/Util";

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    useEffect(() => {
        // Load initial counts from local storage
        setCartCount(getStoredReadList().length);
        setWishlistCount(getStoredWishList().length);

        // Update cart count when an item is added
        const updateCartCount = () => setCartCount(getStoredReadList().length);
        const updateWishlistCount = () => setWishlistCount(getStoredWishList().length);

        window.addEventListener('cartCountUpdate', updateCartCount);
        window.addEventListener('wishlistCountUpdate', updateWishlistCount);

        return () => {
            window.removeEventListener('cartCountUpdate', updateCartCount);
            window.removeEventListener('wishlistCountUpdate', updateWishlistCount);
        };
    }, []);

    const { pathname } = useLocation();

    const nav = (
        <div className="space-x-12 font-medium text-lg flex flex-col md:flex-row ">
            <NavLink className={({ isActive }) => (isActive ? 'bg-red-600' : " ")} to={'/'}>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'bg-red-600' : " ")} to={'/statistics'}>Statistics</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'bg-red-600' : " ")} to={'/dashboard'}>Dashboard</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'bg-red-600' : " ")} to={'/unique'}>Unique</NavLink>
        </div>
    );

    return (
        <div className={`navbar sm:px-3 xl:px-28 ${pathname === '/' ? "bg-prime text-white" : "bg-white text-black"}`}>
            <div className="navbar-start">
                <a className="text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">{nav}</ul>
            </div>
            <div className="navbar-end space-x-4">
                <div className="relative rounded-full border-2 p-2">
                    <MdOutlineShoppingCart size={20} />
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-red-600 bg-white rounded-full">
                        {cartCount}
                    </span>
                </div>
                <div className="relative rounded-full border-2 p-2">
                    <FiHeart size={20} />
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-red-600 bg-white rounded-full">
                        {wishlistCount}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
