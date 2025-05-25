import "../index.css";


export default function Hero() {
    return <div className="mt-32 bg-green-400 w-full h-auto ">
        <div className="h-auto w-full relative overflow-hidden">
            <video src="/video/video1.webm" muted autoPlay loop className="w-full h-full object-cover" ></video>
            <div className="absolute w-auto  left-0 top-0  md:top-10 h-auto  ">
                <h4 className="mt-2 md:mt-10 pl-4 md:pl-14 lg:pl-20 flex items-center justify-start gap-3">
                    <div className="h-2 w-2 bg-violet-500 rounded-[100%] "></div>
                    <span>2025 #1 Fastest Growing Product by G2</span>
                </h4>
                <h1 className=" mt-2 md:mt-4 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold pl-4 md:pl-14 lg:pl-20">
                    AI Video Generator. <br />Unlimited AI Videos. <br />No Camera Needed.
                </h1>

                <p className="mt-10 md:mt-16 pl-4 md:pl-14 lg:pl-20 md:text-lg text-sm text-gray-500 font-semibold">
                    HeyGen AI turns text to video in only a few minutes. <br />It’s easy, and it’s the future.
                </p>
                <div className="hero-button rounded-3xl text-center text-white text-[15px] md:text-lg  font-semibold mt-4 inline-block ml-4 md:ml-14 lg:ml-20 md:mt-10 px-4 py-3">
                    Get Started For Free
                </div>
            </div>
        </div>
    </div>
}