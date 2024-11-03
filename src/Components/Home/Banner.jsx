/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import BannerImage from "../BannerImage"

const Banner = ({ title, subtitle }) => {
    const navigator = useNavigate()
    return (
        <>
            <div className="hero bg-prime min-h-[500px] text-white ">
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">
                            {subtitle}
                        </p>
                        <button onClick={() => navigator('/dashboard')} className="btn btn-primary">Shop Now</button>
                    </div>
                </div>

            </div>
                <BannerImage />

        </>
    )
}

export default Banner
