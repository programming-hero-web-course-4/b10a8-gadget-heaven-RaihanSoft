import { Outlet } from "react-router-dom"
import Footer from "../Components/Home/Footer"
import Navbar from "../Components/Home/Navbar"


const MainLayouts = () => {
    return (
        <>
            {/* Navbar  */}
            <Navbar />



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
