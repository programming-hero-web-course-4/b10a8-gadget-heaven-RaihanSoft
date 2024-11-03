import { Outlet } from "react-router-dom"
import Footer from "../Components/Home/Footer"
import Navbar from "../Components/Home/Navbar"
import Banner from "../Components/Home/Banner"

const MainLayouts = () => {
    return (
        <>
            {/* Navbar  */}
            <Navbar />

            {/* Banner */}
            <Banner />


            {/* Gadgets  Dynamic */}
            <div className="min-h-[calc(100vh-384px)]" >
                <Outlet />
            </div>



            {/* Footer  */}
            <Footer />

        </>
    )
}

export default MainLayouts
