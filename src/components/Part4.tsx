import { useState } from "react"

export default function Part4() {

    const [currentVideo , setCurrentVideo] = useState(1); 

    return <div className="w-full h-auto relative overflow-hidden bg-[#FBFAF9]">
        <div className="mixed-color absolute h-[150px] md:h-[200px] w-auto inset-0 "></div>
        <div className="absolute -top-3 -left-36 md:-left-20 h-[250px] w-[200px] rounded-br-[100%] bg-[#FBFAF9] blur-[2px]  "></div>
        <div className="absolute -top-3 -right-36 md:-right-20 h-[250px] w-[200px] rounded-bl-[100%] bg-[#FBFAF9] blur-[2px]  "></div>
        <div className="bg-transparent flex items-center justify-center relative h-full w-full py-16 md:py-36">
            <div className="flex flex-col items-center justify-center">
                <h4 className=" flex items-center justify-center  gap-3 font-semibold text-gray-500 text-lg">
                    <div className="bg-violet-500 h-2 w-2 rounded-[100%]"></div> <p>AI Translator</p>
                </h4>
                <h2 className="mt-8 font-semibold text-violet-500 text-xl md:text-2xl lg:text-3xl ">Speak Any Language.</h2>
                <p className="text-xl md:text-2xl text-center font-semibold mt-2">Translate Your Videos Into Any Language with <br />Perfect Voice Cloning and Lip Syncing. </p>
            </div>
            
        </div>
        <div className=" py-8 pl-6 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-36 w-[75%] md:w-1/2 text-lg font-semibold">
            <span className="font-bold">Sound like you in any language.</span> Enhance and optimize your videos quickly and efficiently with powerful AI-driven customization designed to save you time and effort.
        </div>

        {/**   video section   */}
        <div className="w-full h-auto py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20">
            <div className="relative">
                <div className="h-auto w-auto overflow-hidden rounded-3xl">
                    {
                        currentVideo === 1 ?
                        <video src="/video/English.webm" loop muted autoPlay className="object-cover" ></video>
                        :
                            currentVideo === 2 ?
                            <video src="/video/spanish.webm" loop muted autoPlay className="object-cover"></video>
                            :
                                currentVideo === 3 ?
                                <video src="/video/chinese.webm" loop muted autoPlay className="object-cover"></video>
                                :
                                    currentVideo === 4 ?
                                    <video src="/video/german.webm" loop muted autoPlay className="object-cover"></video>
                                    :
                                    <video src="/video/french.webm" loop muted autoPlay className="object-cover"></video>
                    }
                </div>
                <div className="absolute  bottom-[20%] md:bottom-[10%] left-[50%] translate-x-[-50%] flex items-center justify-center gap-3 md:gap-6 flex-wrap w-full h-auto">
                    <div 
                    onClick={() => setCurrentVideo(1)}
                    className={`cursor-pointer border-2 ${currentVideo === 1 ? "bg-[#7559FF] text-white border-white" : "bg-white text-black"} md:px-4 px-1 py-3 text-center text-lg font-semibold rounded-lg  `}>English</div>
                    <div 
                    onClick={() => setCurrentVideo(2)}
                    className={`cursor-pointer border-2 ${currentVideo === 2 ? "bg-[#7559FF] text-white border-white" : "bg-white text-black"} md:px-4 px-1 py-3 text-center text-lg font-semibold rounded-lg  `}>Spanish</div>
                    <div 
                    onClick={() => setCurrentVideo(3)}
                    className={`cursor-pointer border-2 ${currentVideo === 3 ? "bg-[#7559FF] text-white border-white" : "bg-white text-black"} md:px-4 px-1 py-3 text-center text-lg font-semibold rounded-lg  `}>Chinese</div>
                    <div 
                    onClick={() => setCurrentVideo(4)}
                    className={`cursor-pointer border-2 ${currentVideo === 4 ? "bg-[#7559FF] text-white border-white" : "bg-white text-black"} md:px-4 px-1 py-3 text-center text-lg font-semibold rounded-lg  `}>German</div>
                    <div 
                    onClick={() => setCurrentVideo(5)}
                    className={`cursor-pointer border-2 ${currentVideo === 5 ? "bg-[#7559FF] text-white border-white" : "bg-white text-black"} md:px-4 px-1 py-3 text-center text-lg font-semibold rounded-lg  `}>French</div>
                </div>
            </div>
        </div>

        <div className=" py-8 pl-6 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-36 w-[75%] md:w-1/2 text-lg font-semibold">
            <span className="font-bold">More than just translation.</span> Maintain voice authenticity and emotional tone across 175+ languages and dialects.
        </div>

        <div className="flex items-center justify-between w-full gap-6 h-auto md:flex-row flex-col py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20">
            <div className="h-auto w-auto rounded-3xl overflow-hidden bg-[#201E1C] ">
                <div className="text-white px-10 py-8">
                    <p className="text-violet-500 font-semibold">Auto-Translate</p>
                    <h3 className=" text-lg font-bold">Give Old Videos a New Audience</h3>
                    <p className="mt-10">Drop in any video you have and we’ll switch it to any language you want. Got a ton of videos? Automate the process with our API. It’s never been easier to expand your video library’s reach and tap into new markets.</p>
                </div>
                <img src="/image/part4-image1.avif" alt="image 1" />
            </div>
            <div className="h-auto w-auto rounded-3xl overflow-hidden bg-[#201E1C] ">
                <div className="text-white px-10 py-8">
                    <p className="text-violet-500 font-semibold">Voice-Clone</p>
                    <h3 className=" text-lg font-bold">Be authentic in any language</h3>
                    <p className="mt-10">Preserve your brand’s unique voice across cultures. Our AI-powered localization process captures your original style and tone, ensuring your message resonates in every language. From voiceovers  audience you reach.</p>
                </div>
                <img src="/image/part4-image2.avif" alt="image 1" />
            </div>
        </div>

        <div className="bg-[#201E1C] h-auto rounded-3xl w-auto my-10 mx-4 sm:mx-8 md:mx-10 lg:mx-16 xl:mx-20 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
            <div className="w-full md:w-1/2 h-auto px-8 py-8  flex flex-col justify-between gap-20 lg:gap-24 xl:gap-36 text-white">
                <h4 className="text-lg font-bold">175+ languages and dialects</h4>
                <p>Reach new markets and connect with audiences worldwide using our expansive language support. With over 175 languages and dialects, you can ensure your content is both culturally relevant and linguistically accurate, making a lasting impact on viewers everywhere.</p>
            </div>
            <div  className="w-full md:w-1/2 h-auto object-cover object-center overflow-hidden">
                <img src="/image/part4-image3.avif" alt="" />
            </div>
        </div>
    </div>
}