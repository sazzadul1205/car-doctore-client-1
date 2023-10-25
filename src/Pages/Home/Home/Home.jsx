import { BsMoon, BsSun } from "react-icons/bs";
import { useState } from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import Contacts from "../Contacts/Contacts";
import Features from "../Features/Features";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"} >
            <button
                onClick={toggleDarkMode}
                className="fixed top-5 right-5 p-4 rounded-3xl bg-[#FFD700] text-black"
            >
                {isDarkMode ? <BsSun></BsSun> : <BsMoon></BsMoon>}
            </button>
            <Banner isDarkMode={isDarkMode} />
            <About isDarkMode={isDarkMode} />
            <Services isDarkMode={isDarkMode} />
            <Contacts isDarkMode={isDarkMode} />
            <Features isDarkMode={isDarkMode} />
            <Testimonial isDarkMode={isDarkMode} />
        </div>
    );
};

export default Home;
