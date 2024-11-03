import { useLoaderData, useParams } from "react-router-dom"
import Gadgets from "./Home/Gadgets"
import { useEffect, useState } from "react"


const AllProducts = () => {

    const datas = useLoaderData()

    const { name } = useParams()


    const [product, setProduct] = useState([])
    useEffect(() => {
        if (name) {
            const filtered = [...datas].filter(item => item.category === name)

            setProduct(filtered)

        }
        else {
            setProduct(datas)


        }
    }, [datas, name])



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                 
            {product.map((data) => <Gadgets data={data} key={data.product_id} />)}
        </div>
    )
}

export default AllProducts
