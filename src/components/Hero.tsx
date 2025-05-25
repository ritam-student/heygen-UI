import "../index.css";


export default function Hero() {
    return <div>
        <div className="mt-32  w-full md:h-auto h-[420px] ">
            <div className="md:h-auto h-[500px] w-full relative overflow-hidden">
                <video src="/video/video1.webm" muted autoPlay loop className="w-full h-full object-cover hidden md:block" ></video>
                <div className="absolute w-auto  left-0 top-0  md:top-10 h-auto  ">
                    <h4 className="mt-10 pl-14 md:pl-14 lg:pl-20 flex items-center justify-start gap-3">
                        <div className="h-2 w-2 bg-violet-500 rounded-[100%] "></div>
                        <span className="flex items-center justify-between gap-2"> <span className="hidden lg:block">2025 #1</span> <span>Fastest Growing Product</span> <span className="hidden lg:block">by G2</span> <span className="lg:hidden block">2025</span></span>
                    </h4>
                    <h1 className="mt-4 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold pl-14 md:pl-14 lg:pl-20">
                        AI Video Generator. <br />Unlimited AI Videos. <br />No Camera Needed.
                    </h1>

                    <p className="mt-16 pl-14 md:pl-14 lg:pl-20 md:text-lg text-sm text-gray-500 font-semibold">
                        HeyGen AI turns text to video in only a few minutes. <br />It’s easy, and it’s the future.
                    </p>
                    <div className="hero-button rounded-3xl text-center text-white text-[15px] md:text-lg  font-semibold  inline-block ml-14 md:ml-14 lg:ml-20 mt-10 px-4 py-3">
                        Get Started For Free
                    </div>
                </div>
            </div>
        </div>
        <div className="overflow-hidden h-auto w-auto">
            <video src="/video/ik-video.webm" muted autoPlay loop className="object-cover block md:hidden"></video>
        </div>

        {/**   moving brand logo   */}
        <div className="relative overflow-x-hidden w-full py-6 ">
            <div className="flex items-center gap-16 moving-text">
                <img src="/image/docusign.avif" alt="docusign" />
                <img src="/image/harvard.avif" alt="harvard" />
                <img src="/image/hubspot.avif" alt="hubspot" />
                <img src="/image/klarna.avif" alt="klarna" />
                <img src="/image/komatsu.png" alt="komatsu" />
                <img src="/image/ogilvy.png" alt="ogilvy" />
                <img src="/image/openAI.svg" alt="openai" />
                <img src="/image/pepsico.avif" alt="pepsico" />
                <img src="/image/samsung.png" alt="samsung" />
                <img src="/image/shopify.avif" alt="shopify" />
                <img src="/image/univision.svg" alt="univision" />
                {/* Duplicate for seamless loop */}
                <img src="/image/docusign.avif" alt="docusign" />
                <img src="/image/harvard.avif" alt="harvard" />
                <img src="/image/hubspot.avif" alt="hubspot" />
                <img src="/image/klarna.avif" alt="klarna" />
                <img src="/image/komatsu.png" alt="komatsu" />
                <img src="/image/ogilvy.png" alt="ogilvy" />
                <img src="/image/openAI.svg" alt="openai" />
                <img src="/image/pepsico.avif" alt="pepsico" />
                <img src="/image/samsung.png" alt="samsung" />
                <img src="/image/shopify.avif" alt="shopify" />
                <img src="/image/univision.svg" alt="univision" />
            </div>
        </div>

        <div className="text-center font-medium text-[15px]  md:text-lg py-4">
            <h3>Trusted by over <span className="font-bold">85,000+ customers</span></h3>
        </div>
    </div>
}