
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "../../node_modules/swiper/swiper.css";
import '../../node_modules/swiper/modules/pagination.css';


// import required modules
import { Pagination } from 'swiper/modules';



export default function Part2() {
    return <div className='py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 bg-[#FBFAF9]'>
        <div className=" py-16 md:py24 lg:py-28 ml-4 w-[75%] md:w-1/2 text-lg font-semibold">
            <span className="font-bold">AI Avatars for any use case.</span> Whether for presentations, tutorials, or marketing, AI avatars bring your content to life with realistic movements and expressions.
        </div>

        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                    640 : {
                        slidesPerView : 1.5,
                        spaceBetween: 30
                    },
                    768 : {
                        slidesPerView: 2,
                        spaceBetween : 35
                    },
                    1024 : {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='rounded-lg overflow-hidden relative'>
                        <div className=' h-auto  w-auto overflow-hidden'>
                            <video src="/video/ik-video (1).webm" muted autoPlay loop className='object-cover w-auto h-auto'></video>
                        </div>
                        <div className='fixed bottom-2 left-0 bg-transparent py-[5%] px-8 text-white'>
                            <h3 className='font-semibold text-xl'>Video Avatar</h3>
                            <p className='my-[5%]'>Film yourself, without being on camera. Generate an avatar that looks and sounds like you.</p>
                            <div className='text-lg font-semibold'>Learn More </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-lg overflow-hidden relative'>
                        <div className=' h-auto  w-auto overflow-hidden'>
                            <video src="/video/ik-video (2).webm" muted autoPlay loop className='object-cover w-auto h-auto'></video>
                        </div>
                        <div className='fixed bottom-2 left-0 bg-transparent py-[5%] px-8 text-white'>
                            <h3 className='font-semibold text-xl'>Video Avatar</h3>
                            <p className='my-[5%]'>Film yourself, without being on camera. Generate an avatar that looks and sounds like you.</p>
                            <div className='text-lg font-semibold'>Learn More </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-lg overflow-hidden relative'>
                        <div className=' h-auto  w-auto overflow-hidden'>
                            <video src="/video/ik-video (3).webm" muted autoPlay loop className='object-cover w-auto h-auto'></video>
                        </div>
                        <div className='fixed bottom-2 left-0 bg-transparent py-[5%] px-8 text-white'>
                            <h3 className='font-semibold text-xl'>Video Avatar</h3>
                            <p className='my-[5%]'>Film yourself, without being on camera. Generate an avatar that looks and sounds like you.</p>
                            <div className='text-lg font-semibold'>Learn More </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-lg overflow-hidden relative'>
                        <div className=' h-auto  w-auto overflow-hidden'>
                            <video src="/video/ik-video (4).webm" muted autoPlay loop className='object-cover w-auto h-auto'></video>
                        </div>
                        <div className='fixed bottom-2 left-0 bg-transparent py-[5%] px-8 text-white'>
                            <h3 className='font-semibold text-xl'>Video Avatar</h3>
                            <p className='my-[5%]'>Film yourself, without being on camera. Generate an avatar that looks and sounds like you.</p>
                            <div className='text-lg font-semibold'>Learn More </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-lg overflow-hidden relative'>
                        <div className=' h-auto  w-auto overflow-hidden'>
                            <video src="/video/ik-video (5).webm" muted autoPlay loop className='object-cover w-auto h-auto'></video>
                        </div>
                        <div className='fixed bottom-2 left-0 bg-transparent py-[5%] px-8 text-white'>
                            <h3 className='font-semibold text-xl'>Video Avatar</h3>
                            <p className='my-[5%]'>Film yourself, without being on camera. Generate an avatar that looks and sounds like you.</p>
                            <div className='text-lg font-semibold'>Learn More </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
}