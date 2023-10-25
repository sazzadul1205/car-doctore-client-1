
import banImg1 from '../../../assets/images/banner/1.jpg'
import banImg2 from '../../../assets/images/banner/2.jpg'
import banImg3 from '../../../assets/images/banner/3.jpg'
import banImg4 from '../../../assets/images/banner/4.jpg'
import banImg5 from '../../../assets/images/banner/5.jpg'
import banImg6 from '../../../assets/images/banner/6.jpg'


const Banner = ({ isDarkMode }) => {
    return (
        <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banImg1} className="w-full rounded-xl" />
                    <div className="absolute h-full flex rounded-xl transform left-0 right-5 bottom-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='mr-5 space-y-7 ml-24 mt-24 '>
                            <h1 className='text-6xl font-bold text-white w-1/2'>Affordable Price For Car Servicing</h1>
                            <p className='text-lg font-normal w-1/2 text-white
                            '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide4" className="btn btn-circle hover:bg-orange-500">❮</a>
                        <a href="#slide2" className=" hover:bg-orange-500 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banImg2} className="w-full" />
                    <div className="absolute h-full flex transform left-0 right-5 bottom-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='mr-5 space-y-7 ml-24 mt-24 '>
                            <h1 className='text-6xl font-bold text-white w-1/2'>Affordable Price For Car Servicing</h1>
                            <p className='text-lg font-normal w-1/2 text-white
                            '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide1" className="hover:bg-orange-500 btn btn-circle">❮</a>
                        <a href="#slide3" className="hover:bg-orange-500 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banImg3} className="w-full" />
                    <div className="absolute h-full flex transform left-0 right-5 bottom-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='mr-5 space-y-7 ml-24 mt-24 '>
                            <h1 className='text-6xl font-bold text-white w-1/2'>Affordable Price For Car Servicing</h1>
                            <p className='text-lg font-normal w-1/2 text-white
                            '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide2" className="hover:bg-orange-500 btn btn-circle">❮</a>
                        <a href="#slide4" className="hover:bg-orange-500 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banImg4} className="w-full" />
                    <div className="absolute h-full flex transform left-0 right-5 bottom-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='mr-5 space-y-7 ml-24 mt-24 '>
                            <h1 className='text-6xl font-bold text-white w-1/2'>Affordable Price For Car Servicing</h1>
                            <p className='text-lg font-normal w-1/2 text-white
                            '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide3" className="hover:bg-orange-500 btn btn-circle">❮</a>
                        <a href="#slide5" className="hover:bg-orange-500 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={banImg5} className="w-full" />
                    <div className="absolute h-full flex transform left-0 right-5 bottom-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='mr-5 space-y-7 ml-24 mt-24 '>
                            <h1 className='text-6xl font-bold text-white w-1/2'>Affordable Price For Car Servicing</h1>
                            <p className='text-lg font-normal w-1/2 text-white
                            '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide4" className="hover:bg-orange-500 btn btn-circle">❮</a>
                        <a href="#slide6" className="hover:bg-orange-500 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={banImg6} className="w-full" />
                    <div className="absolute h-full flex transform left-0 right-5 bottom-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='mr-5 space-y-7 ml-24 mt-24 '>
                            <h1 className='text-6xl font-bold text-white w-1/2'>Affordable Price For Car Servicing</h1>
                            <p className='text-lg font-normal w-1/2 text-white
                            '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide5" className="hover:bg-orange-500 btn btn-circle">❮</a>
                        <a href="#slide1" className="hover:bg-orange-500 btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;