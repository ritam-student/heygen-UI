import "../index.css";


export default function Part3() {
    return <div className="bg-[#FBFAF9] ">
        <div className='py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20'>
            <div className=" py-16 md:py24 lg:py-28 ml-4 w-[75%] md:w-1/2 text-lg font-semibold">
                <span className="font-bold">Level up your avatars.</span> Effortlessly customize expressions, movements, clothing, and backgrounds for a lifelike and versatile avatar experience.
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className=" rounded-xl">
                    <video src="/video/MotionControlVideo-Comp.webm" muted autoPlay loop></video>
                    <div className="py-8 px-10 part3-div rounded-xl">
                        <h2 className="text-xl font-bold my-8">Motion Controls</h2>
                        <p className="text-[16px] ">Fine-tune movements and facial expressions for a more engaging and natural-looking avatar.</p>
                    </div>
                </div>
                <div className="rounded-xl">
                    <video src="/video/AVatarLooks-COMP.webm" muted autoPlay loop></video>
                    <div className="py-8 px-10 part3-div rounded-xl">
                        <h2 className="text-xl font-bold my-8">Avatar Personalization</h2>
                        <p className="text-[16px] ">Modify clothing, backgrounds, and styles to fit any scenario, from business meetings to social media content.</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center  justify-between flex-col-reverse md:flex-row gap-10 px-4 md:px-8 py-6 my-24 h-auto w-full bg-white ">
                <div className="h-full w-full md:w-1/2  flex  flex-col justify-between gap-14 md:gap-20 lg:gap-28 xl:gap-40 " >
                    <div>
                        <p className="text-sm text-violet-500 font-medium">Interactive Avatar</p>
                        <h2 className="font-semibold text-xl mt-3">Avatars That Talk Back</h2>
                    </div>
                    <div>
                        <p>Trained on for your needs, Interactive AI answers questions and guides your audience with intelligent, lifelike conversations. They do it all, in any language, 24/7.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-auto object-cover object-center overflow-hidden">
                    <img src="/image/image1-part3.avif" alt="image 1" className="w-full h-full " />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 h-auto w-auto px-4 md:px-8 py-6 my-24 ">
                <div className="h-auto w-full md:w-1/2 ">
                    <h4 className="text-center text-gray-400 text-sm md:text-lg">Case study: trivago key results</h4>
                    <div className="flex items-center justify-center gap-20  mt-10">
                        <div>
                            <h2 className="text-4xl font-bold md:text-5xl text-center">-50%</h2>
                            <p className="mt-2 text-gray-400 text-sm md:text-lg">Post-production Time</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold md:text-5xl text-center">3-4</h2>
                            <p className="mt-2 text-gray-400 text-sm md:text-lg">Months Saved</p>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full md:w-1/2  text-gray-400 pl-0 md:pl-4 pt-6">
                    <div>
                        <img src="/image/image2-part3.png" alt="image 2" />
                    </div>
                    <p className="mt-10 text-lg ">“We did tests with other companies and HeyGen was always on top for quality. We were very transparent with their team from the start because we were in a high-risk high-reward situation where we were doing this for the first time and were really trusting with them and it paid off entirely.”</p>
                    <p className="mt-6">João Laureano, Creative Director</p>
                    <p className="mt-10">Read trivago's full case study</p>
                </div>
            </div>
        </div>
    </div>
}