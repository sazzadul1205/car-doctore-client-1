import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import Skeleton from "react-loading-skeleton";

const Services = ({ isDarkMode }) => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            })
            .catch(error => console.error("Error fetching services: ", error));
    }, []);

    return (
        <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
            <div className="text-center lg:mx-[362px] space-y-5 my-4">
                <h3 className="text-[#FF3811] text-xl font-bold text-center">Service</h3>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading
                    ? Array.from({ length: 6 }, (_, index) => (
                        <div key={index} className="w-full">
                            <Skeleton height={300} />
                            <Skeleton height={30} style={{ marginTop: 10 }} />
                            <Skeleton height={20} style={{ marginTop: 5 }} />
                        </div>
                    ))
                    : services.map(service => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
            </div>
        </div>
    );
};

export default Services;
