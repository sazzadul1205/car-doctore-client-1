
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = ({ isDarkMode }) => {
    return (
        <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
            <div className="hero my-32">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-10 top-1/2 border-8 border-white" />
                    </div>
                    <div className='lg:w-1/2 space-y-8 p-4'>
                        <p className="text-xl font-bold text-[#FF3811]">About Us</p>
                        <h1 className="text-5xl font-bold text-white">We are qualified & of experience in this field</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p >the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-primary bg-[#FF3811] border-[#FF3811]">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;