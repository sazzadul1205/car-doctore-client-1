
import check from '../../../assets/icons/check.svg'
import delivery from '../../../assets/icons/delivery.svg'
import group from '../../../assets/icons/group.svg'
import clock from '../../../assets/icons/clock.svg'
import person from '../../../assets/icons/person.svg'
import Wrench from '../../../assets/icons/Wrench.svg'



const Features = ({isDarkMode}) => {
    return (
        <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
            <div className='my-10'>
                <div className="text-center lg:mx-[362px] space-y-5 my-4">
                    <h3 className="text-[#FF3811] text-xl font-bold text-center">Why Choose Us</h3>
                    <h2 className="text-5xl font-bold">Our Service Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 my-10">
                    <div className='border border-dashed p-12 mx-auto hover:bg-[#FF3811] text-center'>
                        <img className='ml-2' src={group} alt="" />
                        <p className='text-lg font-bold mt-2'>Expert Team</p>
                    </div>
                    <div className='border border-dashed p-12 mx-auto hover:bg-[#FF3811] text-center'>
                        <img className='ml-6' src={clock} alt="" />
                        <p className='text-lg font-bold mt-2'>Timely Delivery</p>
                    </div>
                    <div className='border border-dashed p-12 mx-auto hover:bg-[#FF3811] text-center'>
                        <img className='ml-7' src={person} alt="" />
                        <p className='text-lg font-bold mt-2'>24/7 Support</p>
                    </div>
                    <div className='border border-dashed p-12 mx-auto hover:bg-[#FF3811] text-center'>
                        <img className='ml-7' src={Wrench} alt="" />
                        <p className='text-lg font-bold mt-2'>Best Equipment</p>
                    </div>
                    <div className='border border-dashed p-12 mx-auto hover:bg-[#FF3811] text-center'>
                        <img className='ml-9' src={check} alt="" />
                        <p className='text-lg font-bold mt-2'>100% Guranty</p>
                    </div>
                    <div className='border border-dashed p-12 mx-auto hover:bg-[#FF3811] text-center'>
                        <img className='ml-6' src={delivery} alt="" />
                        <p className='text-lg font-bold mt-2'>Timely Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;