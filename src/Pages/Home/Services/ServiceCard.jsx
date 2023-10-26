import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service;
    console.log(_id);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <div className="flex">
                        <p className="font-semibold text-xl text-[#FF3811]">Price: $ {price}</p>
                        <div>

                            <Link to={`/checkout/${_id}`}>
                                <button className="btn btn-circle">
                                    <AiOutlineArrowRight className="text-[#FF3811]"></AiOutlineArrowRight>
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