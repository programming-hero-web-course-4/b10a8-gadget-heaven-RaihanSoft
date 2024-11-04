import { Outlet } from "react-router-dom";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { getStoredReadList, getStoredWishList } from "../Components/Util/Util";

const MainLayouts = () => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    useEffect(() => {
        // Load initial counts from local storage
        setCartCount(getStoredReadList().length);
        setWishlistCount(getStoredWishList().length);
    }, []);

    const incrementCartCount = () => setCartCount(prev => prev + 1);
    const incrementWishlistCount = () => setWishlistCount(prev => prev + 1);

    return (
        <>
            <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
            <div className="min-h-[calc(100vh-384px)]">
                <Outlet context={{ incrementCartCount, incrementWishlistCount }} />
            </div>
            <ToastContainer />
            <Footer />
        </>
    );
};

export default MainLayouts;
