import { NavLink, Outlet, useLoaderData } from "react-router-dom"
import Banner from "../Components/Home/Banner"

const Home = () => {
    const categories = useLoaderData()



    return (
        <>
            {/* Banner */}
            <Banner title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} />
            <div className="w-11/12 mx-auto grid grid-cols-12 my-10">

                <div className="col-span-3 flex flex-col gap-6  ">
                    <NavLink className={({ isActive }) => `${isActive ? 'bg-red-600' : " "}`} to={'/'}>All Products</NavLink>
                    {categories.map((category) => <NavLink className={({ isActive }) => `${isActive ? 'bg-red-600' : " "}`} to={`/category/${category.name}`} key={category.id}> {category.name} </NavLink>)}
                </div>



                <div className="col-span-9">

                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home
