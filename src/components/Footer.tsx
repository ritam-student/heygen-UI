import "../index.css";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {
    return <div className="bg-[#F0F5F8] h-auto w-full py-10  ">
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 text-lg font-semibold text-gray-500 flex flex-col md:flex-row justify-between">
            <div>
                <div className="flex items-center justify-start gap-3">
                    <div className="h-2 w-2 rounded-[100%] bg-violet-500"></div>
                    <h3>Testimonials</h3>
                </div>
                <div className=" mt-5 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold inline-block text-violet-500">What Customers Say About Us</div>
            </div>
            <div>
                <div className="hero-button rounded-3xl text-center text-white text-[15px] md:text-lg  font-semibold  inline-block mt-10 md:mt-3 px-4 py-3">
                    Get Started For Free
                </div>
            </div>
        </div>

        {/***   moving box    */}
        <div className="relative overflow-x-auto w-full my-16 moving-box-container">
            <div className="flex items-center gap-5 moving-text">
                <div className="h-[300px] w-[450px] flex-shrink-0 bg-white rounded-2xl px-6 py-8 ">
                    <p className="text-violet-500 font-bold">5 out of 5 stars</p>
                    <h3 className="text-lg font-semibold mt-3">"Make your life easier with HeyGen!"</h3>
                    <p className="mt-10 ">"As a marketer, HeyGen has saved me so much time. It's easy to use and the videos look highly professional." - Rebecca S. on Capterra</p>
                </div>
                <div className="h-[300px] w-[450px] flex-shrink-0 bg-white rounded-2xl px-6 py-8 ">
                    <p className="text-violet-500 font-bold">5 out of 5 stars</p>
                    <h3 className="text-lg font-semibold mt-3">"Versatile and intuitive"</h3>
                    <p className="mt-10 ">"The versatility of this tool is impressive. We make everything from ads to tutorials. HeyGen is intuitive and requires minimal effort." - Umair B. on Product Hunt</p>
                </div>
                <div className="h-[300px] w-[450px] flex-shrink-0 bg-white rounded-2xl px-6 py-8 ">
                    <p className="text-violet-500 font-bold">5 out of 5 stars</p>
                    <h3 className="text-lg font-semibold mt-3">"Perfect for global audience"</h3>
                    <p className="mt-10 ">"HeyGen’s multi-language support is perfect for reaching a global audience. The translations and voice overs sound very natural." - Xiao L. on Product Hunt</p>
                </div>
                <div className="h-[300px] w-[450px] flex-shrink-0 bg-white rounded-2xl px-6 py-8 ">
                    <p className="text-violet-500 font-bold">5 out of 5 stars</p>
                    <h3 className="text-lg font-semibold mt-3">"Make your life easier with HeyGen!"</h3>
                    <p className="mt-10 ">"As a marketer, HeyGen has saved me so much time. It's easy to use and the videos look highly professional." - Rebecca S. on Capterra</p>
                </div>
                <div className="h-[300px] w-[450px] flex-shrink-0 bg-white rounded-2xl px-6 py-8 ">
                    <p className="text-violet-500 font-bold">5 out of 5 stars</p>
                    <h3 className="text-lg font-semibold mt-3">"support is perfect for reaching a global audience."</h3>
                    <p className="mt-10 ">"HeyGen’s multi-language support is perfect for reaching a global audience. The translations and voice overs sound very natural." - Xiao L. on Product Hunt</p>
                </div>
                <div className="h-[300px] w-[450px] flex-shrink-0 bg-white rounded-2xl px-6 py-8 ">
                    <p className="text-violet-500 font-bold">5 out of 5 stars</p>
                    <h3 className="text-lg font-semibold mt-3">"Make your life easier with HeyGen!"</h3>
                    <p className="mt-10 ">"As a marketer, HeyGen has saved me so much time. It's easy to use and the videos look highly professional." - Rebecca S. on Capterra</p>
                </div>
            </div>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 flex flex-col xl:flex-row items-start  justify-start gap-24 h-auto w-full">
            <div>
                <img src="/image/heygen-logo.svg" alt="heygtn logo" />
                <div className="text-center rounded-3xl bg-gray-200 text-black  px-5 py-2 hover:text-[#A45BD2] cursor-pointer mt-4 hidden lg:block">Login</div>
                <div className="text-center rounded-3xl bg-black text-white text-sm px-5 font-bold py-2 hover:bg-[#A45BD2] mt-4 cursor-pointer hidden md:block ">Sign up for free</div>
            </div>

            <div className=" flex justify-start  flex-col lg:flex-row lg:gap-40 gap-24 text-sm leading-8">
                <div className="flex flex-col sm:flex-row  sm:h-[320px] justify-between gap-20  h-auto ">
                    <div className="flex justify-between flex-col gap-20 sm:gap-1">
                        <div>
                            <h3 className="text-violet-500 text-lg font-bold mb-2">Pricing</h3>
                            <p>Pricing Plans</p>
                            <p>API Pricing</p>
                        </div>
                        <div>
                            <h3 className="text-violet-500 text-lg font-bold mb-2">HeyGen for Enterprise</h3>
                            <p>Enterprise</p>
                            <p>Contact Sales</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-violet-500 text-lg font-bold mb-2">Video Avatars</h3>
                        <p>Photo Avatars</p>
                        <p>Generative Avatars</p>
                        <p>Stock Avatars</p>
                        <p>Avatar Looks</p>
                        <p>API</p>
                        <p>Video Translation</p>
                        <p>Localization</p>
                        <p>Interactive Avatar</p>
                        <p>AI Tools</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-20 ">
                    <div className="flex justify-between flex-col gap-20 sm:gap-1">
                        <div>
                            <h3 className="text-violet-500 text-lg font-bold mb-2">Industry</h3>
                            <p>Agencies</p>
                            <p>E-Learning</p>
                        </div>
                        <div>
                            <h3 className="text-violet-500 text-lg font-bold mb-2">Resources</h3>
                            <p>Blog</p>
                            <p>Customer Stories</p>
                            <p>Affiliate Program</p>
                            <p>Webinars</p>
                            <p>Help Center</p>
                            <p>Community</p>
                            <p>How To Guides</p>
                            <p>API Docs</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col gap-20 sm:gap-10 ">
                        <div>
                            <h3 className="text-violet-500 text-lg font-bold mb-2">Industry</h3>
                            <p>Marketing</p>
                            <p>Learning & Development</p>
                            <p>Localization</p>
                            <p>Sales Outreach</p>
                        </div>
                        <div>
                            <h3 className="text-violet-500 text-lg font-bold mb-2">Company</h3>
                            <p>About Us</p>
                            <p>Careers</p>
                            <p>Alternatives</p>
                            <p>Trust & Safety</p>
                            <p>AI Research</p>
                            <p>Security Portal</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Moderation Policy</p>
                            <p>Cookie Preference</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5 px-4 sm:px-8 md:px-12 lg:px-16 text-[10px] flex  flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-1  w-full h-auto">
            <div>
                <p>@Copyright HeyGen</p>
                <p>12130 Millennium Drive Suite 300, Los Angeles, CA 90094</p>
            </div>
            <div className="flex items-center justify-between gap-4 text-xl cursor-pointer ">
                <FaLinkedin />
                <FaInstagram />
                <FaYoutube />
            </div>
        </div>
    </div>
}