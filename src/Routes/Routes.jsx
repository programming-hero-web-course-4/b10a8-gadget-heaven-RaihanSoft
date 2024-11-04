import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import AllProducts from "../Components/AllProducts";
import Unique from "../Pages/Unique";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [

            {
                path: "/",
                element: <Home />,
                loader: () => fetch('../category.json'),
                children: [
                    {
                        path: '/',
                        element: <AllProducts />,
                        loader: () => fetch('../gadget.json'),
                    }, {
                        path: '/category/:name',
                        element: <AllProducts />,
                        loader: () => fetch('../gadget.json'),
                    },
                ]


            },
            {
                path: "/statistics",
                element: <Statistics />
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                loader: () => fetch('/gadget.json'),
                children: [
                    {
                        path: 'cart',
                        element: <Cart />,
                    },
                    {
                        path: 'wishlist',
                        element: <Wishlist />
                    }
                ]

            },


            {
                path: "/unique",
                element: <Unique />
            },
            {
                path: "/details/:id",
                element: <ProductDetails />,
                loader: () => fetch('../gadget.json'),

            }


        ]
    },

]);
export default router
