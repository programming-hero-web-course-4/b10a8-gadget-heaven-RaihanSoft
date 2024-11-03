import { FiHeart } from "react-icons/fi"
import { MdOutlineShoppingCart } from "react-icons/md"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const nav =
        <div className="space-x-12 font-medium text-lg flex flex-col md:flex-row ">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/statistics'}>Statistics</NavLink>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
            <NavLink to={'/unique'}>Unique</NavLink>
        </div>
    return (
        <div className="navbar bg-prime sm:px-3 xl:px-28 text-white">
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
            <div className="navbar-end space-x-4 ">
                <MdOutlineShoppingCart size={20} />
                <FiHeart size={20} />

            </div>
        </div>
    )
}

export default Navbar
