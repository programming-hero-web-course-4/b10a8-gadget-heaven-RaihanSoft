import { Link,} from "react-router-dom"

/* eslint-disable react/prop-types */
const Gadgets = ({ data }) => {


    // eslint-disable-next-line no-unused-vars
    const { product_image, product_title, price ,id } = data
    return (
        <div className="card bg-base-100  shadow-md border-2">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{product_title}</h2>
                <p> <span>price:</span> {price}<span>k</span> </p>
                <div className="card-actions">
                    <Link to={`/details/${id}`}>  <button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Gadgets
