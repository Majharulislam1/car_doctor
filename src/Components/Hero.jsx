import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import first from '../assets/banner/1.jpg';
import second from '../assets/banner/2.jpg';
import third from '../assets/banner/3.jpg';
import four from '../assets/banner/4.jpg';
import five from '../assets/banner/5.jpg';

const Hero = () => {
    return (

        <>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative h-[70vh] bg-cover bg-right-bottom bg-no-repeat w-full'
                        style={{ backgroundImage: `url(${first})` }}>

                        <div className='absolute inset-0  bg-gradient-to-r from-black via-transparent to-transparent'>

                            <div>
                                <h1 className='text-5xl p-7 font-bold text-white'>Affordable <br /> Price For Car <br />Servicing</h1>
                                <p className='text-gray-400 p-7'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                                <div className='p-7'>
                                    <button className='text-white bg-primary rounded-sm px-4 py-2 mx-3'>Discover more</button>
                                    <button className='text-white border-white border-2 px-4 py-2 rounded-sm'>Latest Project</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative h-[70vh] bg-cover bg-right-bottom bg-no-repeat w-full'
                        style={{ backgroundImage: `url(${second})` }}>

                        <div className='absolute inset-0  bg-gradient-to-r from-black via-transparent to-transparent'>

                            <div>
                                <h1 className='text-5xl p-7 font-bold text-white'>Affordable <br /> Price For Car <br />Servicing</h1>
                                <p className='text-gray-400 p-7'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                                <div className='p-7'>
                                    <button className='text-white bg-primary rounded-sm px-4 py-2 mx-3'>Discover more</button>
                                    <button className='text-white border-white border-2 px-4 py-2 rounded-sm'>Latest Project</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-[70vh] bg-cover bg-right-bottom bg-no-repeat w-full'
                        style={{ backgroundImage: `url(${third})` }}>

                        <div className='absolute inset-0  bg-gradient-to-r from-black via-transparent to-transparent'>

                            <div>
                                <h1 className='text-5xl p-7 font-bold text-white'>Affordable <br /> Price For Car <br />Servicing</h1>
                                <p className='text-gray-400 p-7'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                                <div className='p-7'>
                                    <button className='text-white bg-primary rounded-sm px-4 py-2 mx-3'>Discover more</button>
                                    <button className='text-white border-white border-2 px-4 py-2 rounded-sm'>Latest Project</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-[70vh] bg-cover bg-right-bottom bg-no-repeat w-full'
                        style={{ backgroundImage: `url(${four})` }}>

                        <div className='absolute inset-0  bg-gradient-to-r from-black via-transparent to-transparent'>

                            <div>
                                <h1 className='text-5xl p-7 font-bold text-white'>Affordable <br /> Price For Car <br />Servicing</h1>
                                <p className='text-gray-400 p-7'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                                <div className='p-7'>
                                    <button className='text-white bg-primary rounded-sm px-4 py-2 mx-3'>Discover more</button>
                                    <button className='text-white border-white border-2 px-4 py-2 rounded-sm'>Latest Project</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-[70vh] bg-cover bg-right-bottom bg-no-repeat w-full'
                        style={{ backgroundImage: `url(${five})` }}>

                        <div className='absolute inset-0  bg-gradient-to-r from-black via-transparent to-transparent'>

                            <div>
                                <h1 className='text-5xl p-7 font-bold text-white'>Affordable <br /> Price For Car <br />Servicing</h1>
                                <p className='text-gray-400 p-7'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                                <div className='p-7'>
                                    <button className='text-white bg-primary rounded-sm px-4 py-2 mx-3'>Discover more</button>
                                    <button className='text-white border-white border-2 px-4 py-2 rounded-sm'>Latest Project</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                 
            </Swiper>
        </>

    );
};

export default Hero;