import quote from '../../../assets/icons/quote.svg'
import star from '../../..//assets/star.svg'
const Testimonial = () => {
    return (
        <div className='my-10'>
            <div className="text-center lg:mx-[362px] space-y-5 my-4">
                <h3 className="text-[#FF3811] text-xl font-bold text-center">What Customer Says</h3>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="flex ">
                <div className="w-1/2">
                    <div className="flex gap-10">
                        <div className="avatar">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Awlad Hossain</h1>
                            <p>Businessman</p>
                        </div>
                        <div>
                            <img className='w-14' src={quote} alt="" />
                        </div>
                    </div>
                    <div className="mt-10 mx-5">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                    <div className='mt-5 mx-5 flex'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex gap-10">
                        <div className="avatar">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />

                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Awlad Hossain</h1>
                            <p>Businessman</p>
                        </div>
                        <div>
                            <img className='w-14' src={quote} alt="" />
                        </div>
                    </div>
                    <div className="mt-10 mx-5">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                    <div className='mt-5 mx-5 flex'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;