
export default function Part5() {
    return <div className="w-full h-auto relative overflow-hidden bg-[#FBFAF9]">
        <div className="mixed-color absolute h-[150px] md:h-[200px] w-auto inset-0 "></div>
        <div className="absolute -top-3 -left-36 md:-left-20 h-[250px] w-[200px] rounded-br-[100%] bg-[#FBFAF9] blur-[2px]  "></div>
        <div className="absolute -top-3 -right-36 md:-right-20 h-[250px] w-[200px] rounded-bl-[100%] bg-[#FBFAF9] blur-[2px]  "></div>
        <div className="bg-transparent flex items-center justify-center relative h-full w-full py-16 md:py-36">
            <div className="flex flex-col items-center justify-center">
                <h4 className=" flex items-center justify-center  gap-3 font-semibold text-gray-500 text-lg">
                    <div className="bg-violet-500 h-2 w-2 rounded-[100%]"></div> <p>AI Video Studio</p>
                </h4>
                <h2 className="mt-8 font-semibold text-violet-500 text-xl md:text-2xl lg:text-3xl ">Edit Your Video.</h2>
                <p className="text-xl md:text-2xl text-center font-semibold mt-2">A Powerful Editing Studio Designed to Make your <br />Videos Get Results. </p>
            </div>
            
        </div>
        

        {/**   video section   */}
        <div className="w-full h-auto  px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20">
            <video src="/video/StudioVideo-COMP.webm" autoPlay muted loop ></video>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 h-auto w-auto px-4 md:px-8 py-6 my-24 ">
                <div className="h-auto w-full md:w-1/2 ">
                    <h4 className="text-center text-gray-400 text-sm md:text-lg">Case Study: Würth Group Key Results</h4>
                    <div className="flex items-center flex-col justify-center gap-20  mt-10">
                        <div>
                            <h2 className="text-4xl font-bold md:text-5xl text-center">80%</h2>
                            <p className="mt-2 text-gray-400 text-sm md:text-lg">Reduction in video translation costs</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold md:text-5xl text-center">{"< 45 Mins"}</h2>
                            <p className="mt-2 text-gray-400 text-sm md:text-lg text-center">To train employees on HeyGen</p>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full md:w-1/2  text-gray-400 pl-0 md:pl-4 pt-6">
                    <div className="h-[100px] w-[200px]">
                        <img src="/image/image1-part5.svg" alt="image 2" />
                    </div>
                    <p className="mt-10 text-lg ">“HeyGen has revolutionized the way we create video content and has helped use video as a form of communication...it has made communication much more accessible and much more personal.”</p>
                    <p className="mt-6">Andreas Henschel, Group Leader in Corporate Communications</p>
                    <p className="mt-10 text-violet-500">Read Würth Group's Full Case Study</p>
                </div>
            </div>
    </div>
}