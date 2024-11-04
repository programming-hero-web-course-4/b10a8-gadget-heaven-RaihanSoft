import { FiHeart } from "react-icons/fi"
import { MdOutlineShoppingCart } from "react-icons/md"
import { NavLink, useLocation } from "react-router-dom"
import { getStoredReadList, getStoredWishList } from "../Util/Util";


const Navbar = () => {
    const { pathname } = useLocation()


    const storedList = getStoredReadList();
    const storedWishList = getStoredWishList();


    const nav =
        <div className="space-x-12 font-medium text-lg flex flex-col md:flex-row ">
            <NavLink className={({ isActive }) => `${isActive ? 'bg-red-600' : " "}`} to={'/'}>Home</NavLink>
            <NavLink className={({ isActive }) => `${isActive ? 'bg-red-600' : " "}`} to={'/statistics'}>Statistics</NavLink>
            <NavLink className={({ isActive }) => `${isActive ? 'bg-red-600' : " "}`} to={'/dashboard'}>Dashboard</NavLink>
            <NavLink className={({ isActive }) => `${isActive ? 'bg-red-600' : " "}`} to={'/unique'}>Unique</NavLink>
        </div>
    return (
        <>
            <div className={`navbar sm:px-3 xl:px-28 ${pathname === '/' ? "bg-prime text-white" : "bg-white text-black"}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            {nav}

                        </ul>
                    </div>
                    <a className=" text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <div className="relative rounded-full border-2 p-2">
                        <MdOutlineShoppingCart size={20} />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-red-600 bg-white rounded-full">{`${storedList.length}`}</span>
                    </div>
                    <div className="relative rounded-full border-2 p-2">
                        <FiHeart size={20} />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-red-600 bg-white rounded-full">{`${storedWishList.length}`}</span>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
