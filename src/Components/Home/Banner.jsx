const Banner = () => {
    return (
        <>
            <div className="hero bg-prime min-h-[500px] text-white ">
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>

            </div>
            {/* banner image  */}
            <div className="bg-banner min-h-[400px] max-w-5xl mx-auto  bg-center bg-cover bg-no-repeat -mt-32"></div>
        </>
    )
}

export default Banner
