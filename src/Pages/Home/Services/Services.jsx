// import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../hooks/useServices";

// DRY ---> do not repeat yourself
const Services = ({ isDarkMode }) => {
    const services = useServices()
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://car-doctore-server.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => {
    //             setServices(data);
    //         })

    // }, []);

    return (
        <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
            <div className="text-center lg:mx-[362px] space-y-5 my-4">
                <h3 className="text-[#FF3811] text-xl font-bold text-center">Service</h3>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    services.map(service => (<ServiceCard key={service._id} service={service} />
                    ))}

            </div>
        </div>
    );
};

export default Services;
