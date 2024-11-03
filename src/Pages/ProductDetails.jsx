import { useEffect, useState } from "react"
import { FiHeart } from "react-icons/fi"
import { MdOutlineShoppingCart } from "react-icons/md"
import { useLoaderData, useParams } from "react-router-dom"


const ProductDetails = () => {
    const datas = useLoaderData()
    const { id } = useParams()

    const [product, setProduct] = useState({})
    const { product_image, product_title, price, description, specification, rating } = product
    useEffect(() => {
        const singleData = datas.find(data => data.id === parseInt(id))
        setProduct(singleData)

    }, [datas, id])
    return (

        <>

            <div className="text-center bg-prime text-white py-10 pb-40 mb-10">
                <h1 className="text-5xl font-bold " >Product Details</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>


            <div className="hero bg-base-200 min-h-[400px] -mt-40 w-8/12 mx-auto mb-10 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">

                    <img
                        src='https://images.unsplash.com/photo-1730510733142-979103e3e023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D'
                        className="max-w-lg h-full w-full rounded-lg shadow-2xl  " />

                    <div>
                        <h1 className="text-4xl font-bold">{product_title}</h1>
                        <p className="mt-5">price {price} </p>
                        <p className="py-6">{description} </p>
                        <h2>Device Specifications</h2>

                        <ul>
                            {specification && specification.length > 0 && (
                                <ul>
                                    {specification.map((spec, index) => (
                                        <li key={index}>{spec}</li>
                                    ))}
                                </ul>
                            )}

                        </ul>
                        <h2>Rating ⭐ </h2>
                        <p>{rating}</p>


                        <div className="flex items-center gap-5">
                            <button className="btn btn-primary">Add To Card <MdOutlineShoppingCart size={20} /></button>
                            <button className="btn btn-primary">  <FiHeart size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails