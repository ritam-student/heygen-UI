

export default function Part1() {
    return <div className="w-full h-auto relative overflow-hidden">
        <div className="mixed-color absolute h-[150px] md:h-[200px] w-auto inset-0 "></div>
        <div className="absolute -top-3 -left-36 md:-left-20 h-[250px] w-[200px] rounded-br-[100%] bg-white blur-[2px]  "></div>
        <div className="absolute -top-3 -right-36 md:-right-20 h-[250px] w-[200px] rounded-bl-[100%] bg-white blur-[2px]  "></div>
        <div className="bg-transparent flex items-center justify-center relative h-full w-full py-16 md:py-36">
            <div className="flex flex-col items-center justify-center">
                <h4 className=" flex items-center justify-center  gap-3 font-semibold text-gray-500 text-lg">
                    <div className="bg-violet-500 h-2 w-2 rounded-[100%]"></div> <p>AI Avatars</p>
                </h4>
                <h2 className="mt-8 font-semibold text-violet-500 text-xl md:text-2xl lg:text-3xl ">Cast Your Avatar.</h2>
                <p className="text-xl md:text-2xl text-center font-semibold mt-2">Clone Yourself, Pick a Stock Avatar or Generate a <br />New Avatar with AI.</p>
            </div>
            
        </div>
        <div className=" py-8 pl-6 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-36 w-[75%] md:w-1/2 text-lg font-semibold">
            <span className="font-bold">The most realistic avatars ever created.</span> Designed to be customizable with an incredible level of precise facial expressions and offering a new standard of personalization.
        </div>

        {/**   video section   */}
        <div className="w-full h-auto py-10 px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20">
            {/**   for large screen  */}
            <div className="hidden md:block">
                <div className="w-full h-auto grid grid-cols-4 gap-6">
                    <video src="/video/HomeAvatar0001 (2).webm" autoPlay muted loop ></video>
                    <video src="/video/HomeAvatar0002-Compressed.webm" autoPlay muted loop ></video>
                    <video src="/video/HomeAvatar0003 (Compressed).webm" autoPlay muted loop ></video>
                    <video src="/video/HomeAvatar0004 (Compressed).webm" autoPlay muted loop ></video>
                    <video src="/video/HomeAvatar0005 (Compressed).webm" autoPlay muted loop ></video>
                    <video src="/video/HomeAvatar0006 (Compressed).webm" autoPlay muted loop ></video>
                    <video src="/video/HomeAvatar0007 (Compressed).webm" autoPlay muted loop ></video>
                    <video src="/video/HomeAvatar0008 Compressed.webm" autoPlay muted loop ></video>
                </div>
            </div>

            {/**   for small screen   */}
            <div className="block md:hidden">
                <div className=" gap-4 flex  overflow-x-auto">
                    <div className="inline-block flex-shrink-0 h-[300px] w-[300px] overflow-hidden">
                        <video src="/video/HomeAvatar0001 (2).webm" autoPlay muted loop className="h-full w-full object-cover"></video>
                    </div>
                    <div className="inline-block flex-shrink-0 h-[300px] w-[300px] overflow-hidden">
                        <video src="/video/HomeAvatar0002-Compressed.webm" autoPlay muted loop className="h-full w-full object-cover"></video>
                    </div>
                    <div className="inline-block flex-shrink-0 h-[300px] w-[300px] overflow-hidden">
                        <video src="/video/HomeAvatar0003 (Compressed).webm" autoPlay muted loop className="h-full w-full object-cover"></video>
                    </div>
                    <div className="inline-block flex-shrink-0 h-[300px] w-[300px] overflow-hidden">
                        <video src="/video/HomeAvatar0004 (Compressed).webm" autoPlay muted loop className="h-full w-full object-cover"></video>
                    </div>
                    <div className="inline-block flex-shrink-0 h-[300px] w-[300px] overflow-hidden">
                        <video src="/video/HomeAvatar0005 (Compressed).webm" autoPlay muted loop className="h-full w-full object-cover"></video>
                    </div>
                    <div className="inline-block flex-shrink-0 h-[300px] w-[300px] overflow-hidden">
                        <video src="/video/HomeAvatar0006 (Compressed).webm" autoPlay muted loop className="h-full w-full object-cover"></video>
                    </div>
                    <div className="inline-block flex-shrink-0 h-[300px] w-[300px] overflow-hidden">
                        <video src="/video/HomeAvatar0007 (Compressed).webm" autoPlay muted loop className="h-full w-full object-cover"></video>
                    </div>
                    <div className="inline-block flex-shrink-0 h-[300px] w-[300px] overflow-hidden">
                        <video src="/video/HomeAvatar0008 Compressed.webm" autoPlay muted loop className="h-full w-full object-cover"></video>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}