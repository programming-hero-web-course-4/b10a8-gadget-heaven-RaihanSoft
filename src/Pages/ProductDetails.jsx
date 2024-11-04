import { useEffect, useState } from "react"
import { FiHeart } from "react-icons/fi"
import { MdOutlineShoppingCart } from "react-icons/md"
import { useLoaderData, useParams } from "react-router-dom"

import { addToStoredReadList, addToStoredWishList } from "../Components/Util/Util"


const ProductDetails = () => {



    const datas = useLoaderData()
    const { id } = useParams()

    const [product, setProduct] = useState({})
    const { product_image, product_title, price, description, specification, rating } = product
    useEffect(() => {
        const singleData = datas.find(data => data.id === parseInt(id))
        setProduct(singleData)

    }, [datas, id])

    const handleMarkAsRead = (id) => {


        addToStoredReadList(id)



    }

    const handleMarkAsWish = (id) => {
        addToStoredWishList(id)

    }




    return (

        <>

            <div className="text-center bg-prime text-white py-10 pb-40 mb-10">
                <h1 className="text-5xl font-bold " >Product Details</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>


            <div className="hero bg-base-200 min-h-[400px] -mt-40 w-8/12 mx-auto mb-10 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">

                    <img
                        src={product_image}
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
                            <button onClick={() => handleMarkAsRead(id)} className="btn btn-primary">Add To Card <MdOutlineShoppingCart size={20} /></button>
                            <button onClick={() => handleMarkAsWish(id)} className="btn btn-primary">  <FiHeart size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
