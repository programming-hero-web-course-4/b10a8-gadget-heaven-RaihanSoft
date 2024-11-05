import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList } from "../Components/Util/Util";

const ProductDetails = () => {
    const datas = useLoaderData();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isInCart, setIsInCart] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const { product_image, product_title, price, description, specification, rating } = product;

    useEffect(() => {
        const singleData = datas.find(data => data.id === parseInt(id));
        if (singleData) {
            setProduct(singleData);

            const storedCartList = getStoredReadList();
            const storedWishlist = getStoredWishList();
            setIsInCart(storedCartList.includes(id));
            setIsInWishlist(storedWishlist.includes(id));
        } else {
            console.error('Product not found');
        }
    }, [datas, id]);

    const handleAddToCartClick = () => {
        addToStoredReadList(id);
        setIsInCart(true);
        window.dispatchEvent(new Event('cartCountUpdate'));
    };

    const handleAddToWishlist = () => {
        addToStoredWishList(id);
        setIsInWishlist(true);
        window.dispatchEvent(new Event('wishlistCountUpdate'));
    };

    return (
        <>
            <div className="text-center bg-prime text-white py-10 pb-40 mb-10">
                <h1 className="text-5xl font-bold">Product Details</h1>
                <p>Explore the latest gadgets that will take your experience to the next level.</p>
            </div>
            <div className="hero bg-base-200 min-h-[400px] -mt-40 w-8/12 mx-auto mb-10 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product_image} className="max-w-lg h-full w-full rounded-lg shadow-2xl" alt={product_title} />
                    <div>
                        <h1 className="text-4xl font-bold">{product_title}</h1>
                        <p className="mt-5">Price: {price}</p>
                        <p className="py-6">{description}</p>
                        <h2>Device Specifications</h2>
                        <ul>
                            {specification && specification.map((spec, index) => <li key={index}>{spec}</li>)}
                        </ul>
                        <h2>Rating ⭐ </h2>
                        <p>{rating}</p>
                        <div className="flex items-center gap-5">
                            <button 
                                onClick={handleAddToCartClick} 
                                className="btn btn-primary"
                                disabled={isInCart} 
                            >
                                {isInCart ? "Added to Cart" : "Add To Cart"} 
                                <MdOutlineShoppingCart size={20} />
                            </button>
                            <button 
                                onClick={handleAddToWishlist} 
                                className="btn btn-primary"
                                disabled={isInWishlist}
                            >
                                {isInWishlist ? "Added to Wishlist" : "Add To Wishlist"} 
                                <FiHeart size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
