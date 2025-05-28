
export default function Part6(){
    return <div className="w-full h-auto relative overflow-hidden bg-[#1D1B2A] text-white">
        <div className="mixed-color1 absolute h-[150px] md:h-[200px] w-auto inset-0 "></div>
        <div className="absolute -top-3 -left-36 md:-left-20 h-[250px] w-[200px] rounded-br-[100%] bg-[#1D1B2A] blur-[17px]  "></div>
        <div className="absolute -top-3 -right-36 md:-right-20 h-[250px] w-[200px] rounded-bl-[100%] bg-[#1D1B2A] blur-[17px]  "></div>
        <div className="px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20">
            <div className=" flex items-start md:items-end flex-col md:flex-row justify-between gap-16 relative h-full w-full py-16 md:py-36 px-6 md:px-14 xl:px-20">
                <div className="flex flex-col items-start w-[75%]  md:w-[40%] justify-start">
                    <h4 className=" flex items-center  gap-3 font-semibold text-gray-500 text-lg">
                        <div className="bg-violet-500 h-2 w-2 rounded-[100%]"></div> <p>HeyGen Technology</p>
                    </h4>
                    <h2 className="mt-8 font-semibold text-violet-500 text-xl md:text-2xl lg:text-3xl ">What's Possible With HeyGen?</h2>
                    <p className="text-2xl md:text-3xl xl:text-4xl  font-bold mt-2">AI Tools That Feel Like Magic.</p>
                    <p className="text-gray-300 mt-14 md:mt-20 xl:mt-28 ">From automated video translation to brand-consistent voiceovers, HeyGen harnesses AI to elevate your content creation.</p>
                </div>

                <div>
                    <div className="hero-button rounded-3xl text-center text-white text-[15px] md:text-lg  font-semibold  inline-block ml-14 md:ml-14 lg:ml-20 mt-10 px-4 py-3">
                        Get Started For Free
                    </div>
                </div>
                
            </div>
            

            <div className="bg-[#212121] h-auto rounded-3xl w-auto mb-10 mx-4 sm:mx-8 md:mx-10 lg:mx-16 xl:mx-20 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
                <div className="w-full md:w-1/2 h-auto px-8 py-8  flex flex-col justify-between gap-20 lg:gap-24 xl:gap-36 text-white">
                    <h4 className="text-lg font-bold">Templates that Don't Feel Like Templates</h4>
                    <p>Skip the cookie-cutter approach. Our fully customizable templates adapt to your unique brand style, making it easy to create compelling marketing clips, training modules, and product demos. Stand out from the crowd with polished videos that look and feel like they were made just for you.</p>
                </div>
                <div  className="w-full md:w-1/2 h-auto object-cover object-center overflow-hidden">
                    <img src="/image/image1-part6.avif" alt="image1" />
                </div>
            </div>

            <div className="flex items-center justify-between w-full gap-6 h-auto md:flex-row flex-col py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20">
                <div className="h-auto w-auto rounded-3xl overflow-hidden bg-[#212121] ">
                    <div className="text-white px-10 py-8">
                        <h3 className=" text-xl font-bold">Integrate HeyGen</h3>
                        <p className="mt-10">Streamline your workflow and eliminate tedious manual tasks. Our API lets you automate video production and convert speech to multiple languages  with minimal effort and cost . Focus on crafting powerful stories while we handle the heavy lifting behind the scenes.</p>
                    </div>
                    <img src="/image/image2-part6.avif" alt="image 2" />
                </div>
                <div className="h-auto w-auto rounded-3xl overflow-hidden bg-[#212121] ">
                    <div className="text-white px-10 py-8">
                        <h3 className=" text-lg font-bold">Keep It On Brand</h3>
                        <p className="mt-10">Consistency is key to brand loyalty. Customize your videos with your logo, colors, and fonts or choose from simple brand presets for a quick start. From sleek animations to cohesive themes, HeyGen helps you stay on brand while engaging viewers in every language.</p>
                    </div>
                    <img src="/image/image3-part6.avif" alt="image 3" />
                </div>
            </div>

        </div>
        <div className="my-14 md:my-28 xl:my-36 relative w-full h-auto py-4  overflow-hidden">
            
            <div className="hidden md:block absolute inset-0  overflow-hidden">
                <video src="/video/ik-video (6).webm" autoPlay loop muted className="w-full h-full object-cover"></video>
            </div>
            <div className="relative top-[15%]  left-[10%] translate-x-[-10%]  h-auto  w-[40%] py-10 px-5 hidden md:block">
                <div className="flex items-center justify-start gap-4 w-auto">
                    <div className="h-3 w-3 rounded-[100%] bg-violet-500 blur-[1px]"></div>
                    <p>Responsible AI</p>
                </div>
                <div className="w-auto">
                    <h3 className="text-2xl md:text-4xl text-violet-500 mt-[5%] font-bold ">Speed Matters.</h3>
                </div>
                <p className="text-3xl text-white font-bold mt-[2%]">Our Tech is Fast, Secure and Ethical.</p>
                <p className="mt-[10%] text-gray-400">From brainstorming to breakthrough, HeyGen’s AI video tools and avatars are your ultimate creative cheat code. Whether you’re building a global brand, telling your story to subscribers, training a team, or creating scroll-stopping social media content. Designed for creators, marketers, and dreamers alike.</p>

                <div className="hero-button rounded-3xl text-center text-white text-[15px] md:text-lg  font-semibold  inline-block  mt-[20%] px-4 py-3">
                    Get Started For Free
                </div>
            </div>

            <div className=" h-auto  w-full py-10 px-10 md:hidden block">
                <div className="flex flex-col items-center justify-center h-auto w-full ">
                    <div className="flex items-center justify-start gap-4 w-auto">
                        <div className="h-3 w-3 rounded-[100%] bg-violet-500 blur-[1px]"></div>
                        <p>Responsible AI</p>
                    </div>
                    <div className="w-auto">
                        <h3 className="text-2xl md:text-4xl text-violet-500 mt-[5%] font-bold ">Speed Matters.</h3>
                    </div>
                    <p className="text-3xl text-white font-bold mt-[2%] text-center">Our Tech is Fast, Secure and Ethical.</p>
                    <p className="mt-[10%] text-gray-400 text-center">From brainstorming to breakthrough, HeyGen’s AI video tools and avatars are your ultimate creative cheat code. Whether you’re building a global brand, telling your story to subscribers, training a team, or creating scroll-stopping social media content. Designed for creators, marketers, and dreamers alike.</p>

                    <div className="hero-button rounded-3xl text-center text-white text-[15px] md:text-lg  font-semibold  inline-block  mt-[20%] px-4 py-3">
                        Get Started For Free
                    </div>
                </div>
            </div>
        </div>
    </div>
}