import { Link, Outlet, useLoaderData } from "react-router-dom"

const Home = () => {
    const categories = useLoaderData()



    return (
        <div className="w-11/12 mx-auto grid grid-cols-12 my-10">

            <div className="col-span-3 flex flex-col gap-6">
                <Link to={'/'}>All Products</Link>
                {categories.map((category) => <Link to={`/category/${category.name}`} key={category.id}> {category.name} </Link>)}
            </div>

            <div className="col-span-9">

                <Outlet />
            </div>
        </div>
    )
}

export default Home
