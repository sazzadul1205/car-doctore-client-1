import calander from '../../../assets/calander.svg'
import phone from '../../../assets/phone.svg'
import location from '../../../assets/location.svg'

const Contacts = () => {
    return (
        <div className="bg-black px-20 py-16 my-10">
            <div className="flex flex-col lg:flex-row ">
                <div className="flex gap-5 mr-16">
                    <div>
                        <img src={calander} alt="" />
                    </div>
                    <div>
                        <p className=''>We are open monday-friday</p>
                        <h1 className='text-2xl font-bold'>7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className="flex gap-5 mr-16">
                    <div>
                        <img src={phone} alt="" />
                    </div>
                    <div>
                        <p className=''>Have a question?</p>
                        <h1 className='text-2xl font-bold'>+2546 251 2658</h1>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div>
                        <img src={location} alt="" />
                    </div>
                    <div>
                        <p className=''>Need a repair? our address</p>
                        <h1 className='text-2xl font-bold'>Liza Street, New York</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;