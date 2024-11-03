/* eslint-disable react/prop-types */
const Gadgets = ({ data }) => {
    // eslint-disable-next-line no-unused-vars
    const { product_image, product_title, price } = data
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
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default Gadgets
