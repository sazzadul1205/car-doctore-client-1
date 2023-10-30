import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const [_isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulating a delay for the loading skeleton to appear
        return () => clearTimeout(timer);
    }, []);

    const { _id, title, img, price } = service;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    {_isLoading ? (
                        <Skeleton height={300} />
                    ) : (
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    )}
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">
                        {_isLoading ? <Skeleton /> : title}
                    </h2>
                    <div className="flex">
                        {_isLoading ? (
                            <Skeleton width={100} />
                        ) : (
                            <p className="font-semibold text-xl text-[#FF3811]">
                                Price: $ {price}
                            </p>
                        )}
                        <div>
                            <Link to={`/checkout/${_id}`}>
                                <button className="btn btn-circle">
                                    <AiOutlineArrowRight className="text-[#FF3811]" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
