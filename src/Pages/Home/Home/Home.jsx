import About from "../About/About";
import Banner from "../Banner/Banner";
import Contacts from "../Contacts/Contacts";
import Features from "../Features/Features";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contacts></Contacts>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;