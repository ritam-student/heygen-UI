import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Faq() {

    const [currentFAQ , setCurrentFAQ] = useState(0);

    return <div className="bg-white py-16 px-6  flex flex-col items-center justify-center h-auto w-full">
        <div className=" mt-20 mb-28 md:mt-28 md:mb-36 text-3xl md:text-5xl font-bold ">AI Video Generator FAQs</div>
        <div className="flex flex-col items-center justify-center h-auto ">
            <div className="h-auto w-[318px] sm:w-[440px] md:w-[520px] lg:w-[620px] xl:w-[700px] border-t-[0.5px] border-gray-400">
                <div 
                onClick={() => {
                    if(currentFAQ === 1) {
                        // close
                        setCurrentFAQ(0);
                    }else {
                        setCurrentFAQ(1)
                    }
                }}
                className="cursor-pointer flex items-center justify-start gap-4  py-10">
                    <div>
                        {
                            currentFAQ === 1 ? <IoIosArrowUp  className="text-xl"  /> : <IoIosArrowDown className="text-xl"  />
                        }
                    </div>
                    <p className="text-xl font-bold">What is HeyGen ?</p>
                </div>
                {
                    currentFAQ === 1 && 
                    <div className="pl-14 mb-10 text-lg text-gray-500">
                        HeyGen is an AI-powered video platform that allows users to create high-quality videos effortlessly. From lifelike AI avatars to multilingual voice cloning, HeyGen empowers businesses and creators to scale content production with ease.
                        <br /><br />
                        Recognized as G2’s #1 Fastest Growing Product in the 2025 Best Software Awards, HeyGen is transforming how videos are made for marketing, sales, and training.
                    </div>
                }
            </div>
            <div className="h-auto w-[318px] sm:w-[440px] md:w-[520px] lg:w-[620px] xl:w-[700px] border-t-[0.5px] border-gray-400">
                <div 
                onClick={() => {
                    if(currentFAQ === 2) {
                        // close
                        setCurrentFAQ(0);
                    }else {
                        setCurrentFAQ(2)
                    }
                }}
                className="cursor-pointer flex items-center justify-start gap-4  py-10">
                    <div>
                        {
                            currentFAQ === 2 ? <IoIosArrowUp  className="text-xl"  /> : <IoIosArrowDown className="text-xl"  />
                        }
                    </div>
                    <p className="text-xl font-bold">Is HeyGen a free Aivideo generator ?</p>
                </div>
                {
                    currentFAQ === 2 && 
                    <div className="pl-14 mb-10 text-lg text-gray-500">
                        Yes! HeyGen offers a free AI video generator that allows users to create videos with basic features at no cost. For advanced customization, higher-quality exports, and additional AI tools, users can upgrade to a premium plan.
                    </div>
                }
            </div>
            <div className="h-auto w-[318px] sm:w-[440px] md:w-[520px] lg:w-[620px] xl:w-[700px] border-t-[0.5px] border-gray-400">
                <div 
                onClick={() => {
                    if(currentFAQ === 3) {
                        // close
                        setCurrentFAQ(0);
                    }else {
                        setCurrentFAQ(3)
                    }
                }}
                className="cursor-pointer flex items-center justify-start gap-4  py-10">
                    <div>
                        {
                            currentFAQ === 3 ? <IoIosArrowUp  className="text-xl"  /> : <IoIosArrowDown className="text-xl"  />
                        }
                    </div>
                    <p className="text-xl font-bold">How does HeyGen work ?</p>
                </div>
                {
                    currentFAQ === 3 && 
                    <div className="pl-14 mb-10 text-lg text-gray-500">
                        AI video generators use artificial intelligence to convert text into engaging video content. They apply deep learning models to generate realistic visuals, automate voiceovers, and synchronize motion, making video creation fast and effortless.
                    </div>
                }
            </div>
            <div className="h-auto w-[318px] sm:w-[440px] md:w-[520px] lg:w-[620px] xl:w-[700px] border-t-[0.5px] border-gray-400">
                <div 
                onClick={() => {
                    if(currentFAQ === 4) {
                        // close
                        setCurrentFAQ(0);
                    }else {
                        setCurrentFAQ(4)
                    }
                }}
                className="cursor-pointer flex items-center justify-start gap-4  py-10">
                    <div>
                        {
                            currentFAQ === 4 ? <IoIosArrowUp  className="text-xl"  /> : <IoIosArrowDown className="text-xl"  />
                        }
                    </div>
                    <p className="text-xl font-bold">How do AI video generator enhance video content ?</p>
                </div>
                {
                    currentFAQ === 4 && 
                    <div className="pl-14 mb-10 text-lg text-gray-500">
                        AI avatars bring a personal touch to videos by mimicking human speech and expressions. They eliminate the need for on-camera appearances while ensuring a professional and engaging presentation for marketing, education, and entertainment.
                    </div>
                }
            </div>
            <div className="h-auto w-[318px] sm:w-[440px] md:w-[520px] lg:w-[620px] xl:w-[700px] border-t-[0.5px] border-gray-400">
                <div 
                onClick={() => {
                    if(currentFAQ === 5) {
                        // close
                        setCurrentFAQ(0);
                    }else {
                        setCurrentFAQ(5)
                    }
                }}
                className="cursor-pointer flex items-center justify-start gap-4  py-10">
                    <div>
                        {
                            currentFAQ === 5 ? <IoIosArrowUp  className="text-xl"  /> : <IoIosArrowDown className="text-xl"  />
                        }
                    </div>
                    <p className="text-xl font-bold">Can I convert audio to video with HeyGen ?</p>
                </div>
                {
                    currentFAQ === 5 && 
                    <div className="pl-14 mb-10 text-lg text-gray-500">
                        Yes! HeyGen allows users to transform audio into video by pairing voice recordings with AI avatars, captions, and dynamic visuals. Simply upload your audio file, choose a video style, and let AI generate a polished video in minutes.
                    </div>
                }
            </div>
            <div className="h-auto w-[318px] sm:w-[440px] md:w-[520px] lg:w-[620px] xl:w-[700px] border-t-[0.5px] border-gray-400">
                <div 
                onClick={() => {
                    if(currentFAQ === 6) {
                        // close
                        setCurrentFAQ(0);
                    }else {
                        setCurrentFAQ(6)
                    }
                }}
                className="cursor-pointer flex items-center justify-start gap-4  py-10">
                    <div>
                        {
                            currentFAQ === 6 ? <IoIosArrowUp  className="text-xl"  /> : <IoIosArrowDown className="text-xl"  />
                        }
                    </div>
                    <p className="text-xl font-bold">Are AI avatars customizable for branding ?</p>
                </div>
                {
                    currentFAQ === 6 && 
                    <div className="pl-14 mb-10 text-lg text-gray-500">
                        Yes, AI avatars can be personalized with different outfits, backgrounds, and voice options to align with brand identity. Businesses can create avatars that match their professional tone or campaign aesthetics.
                    </div>
                }
            </div>
        </div>
    </div>
}

