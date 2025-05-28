import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { LuSquareUser } from "react-icons/lu";
import { GoLightBulb } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { LuServerCog } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { HiSpeakerphone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { CiVideoOn } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { PiNotePencil } from "react-icons/pi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { IoBagSharp } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { VscSparkleFilled } from "react-icons/vsc";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


export default function Nav() {

    const [currentOpenTab , setCurrentOpenTab] = useState(0);

    const [isMenueOpen , setIsMenueOpen] = useState(false);




    return <div>
        <div className="h-auto w-full bg-white text-black px-4  py-10 flex items-center justify-between text-lg fixed left-0 top-0 z-40 ">
            {/**   left part   */}
            <div className="flex items-center justify-between w-auto gap-10 h-auto ">
                {/**  heygen logo */}
                <div className="cursor-pointer">
                    <img src="/image/heygen-logo.svg" alt="heygen-logo" />
                </div>

                {/**  1. platform */}
                <div className="relative hidden lg:block">
                    <div
                    onClick={() => {
                        // already open
                        if(currentOpenTab === 1){
                            setCurrentOpenTab(0)
                        }else {
                            // already closed
                            setCurrentOpenTab(1)
                        }
                    }}
                    className="relative  cursor-pointer flex items-center justify-between gap-2">
                        <h3 className={` ${currentOpenTab === 1 ? "text-violet-500" : "text-black"}`}>Platform</h3>
                        {
                            currentOpenTab === 1 ?
                            <IoIosArrowUp  className="text-violet-500"  />
                            :
                            <IoIosArrowDown  />
                        }
                        
                    </div>

                    {
                        currentOpenTab === 1 
                        &&
                        <div className="absolute -bottom-52 left-0 bg-white rounded-3xl px-4 py-4 w-[400px] h-auto text-lg ">
                            <div className="h-auto w-full">
                                
                                <div className="flex items-center justify-between h-auto w-full  ">
                                    <h4 className=" h-auto text-gray-400 font-bold w-1/2">PRODUCTS</h4>
                                    <h4 className="  h-auto text-gray-400 font-bold w-1/2 ">FEATURES</h4>
                                </div>
                                <div className="flex items-start mt-4 justify-between h-auto w-full font-semibold text-[16px] ">
                                    <div className="w-1/2 h-auto flex flex-col justify-between gap-4 ">
                                        <div className="flex items-center justify-start gap-1">
                                            <LuSquareUser className="text-violet-500 text-lg" />    
                                            <p>Video Avatars</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-start gap-1">
                                            <GoLightBulb className="text-violet-500 text-lg" />
                                            <p>Avatar IV</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-start gap-1">
                                            <LuSquareUser className="text-violet-500 text-lg" />    
                                            <p>Photo Avatars</p>
                                        </div>
                                        
                                    </div>

                                    <div className="w-1/2 h-auto flex flex-col justify-between gap-4 ">

                                        <div className="flex items-center justify-start gap-1">
                                            <LuUser className="text-violet-500 text-lg" />
                                            <p>Stock Avatars</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-start gap-1">
                                            <LuServerCog className="text-violet-500 text-lg" />
                                            <p>API</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                {/**  2.  solution  */}
                <div className="relative hidden lg:block">
                    <div 
                    onClick={() => {
                        // already open
                        if(currentOpenTab === 2){
                            setCurrentOpenTab(0)
                        }else {
                            // already closed
                            setCurrentOpenTab(2)
                        }
                    }}
                    className="cursor-pointer flex items-center justify-between gap-2">
                        <h3 className={` ${currentOpenTab === 2 ? "text-violet-500" : "text-black"}`}>Solutions</h3>
                        {
                            currentOpenTab === 2 ?
                            <IoIosArrowUp  className="text-violet-500"  />
                            :
                            <IoIosArrowDown  />
                        }
                    </div>

                    {
                        currentOpenTab === 2 
                        &&
                        <div className="absolute -bottom-52 left-0  rounded-3xl px-4 py-4 w-[500px] bg-white h-auto text-lg ">
                            <div className="h-auto w-full">
                                
                                <div className="flex items-center justify-between h-auto w-full  ">
                                    <h4 className=" h-auto text-gray-400 font-bold w-1/3">INDUSTRY</h4>
                                    <h4 className="  h-auto text-gray-400 font-bold w-1/3 ">TEAMS</h4>
                                    <h4 className="  h-auto text-gray-400 font-bold w-1/3 ">USE CASES</h4>
                                </div>
                                <div className="flex items-start mt-4 justify-between h-auto w-full font-semibold text-[16px] ">
                                    <div className="w-1/3 h-auto flex flex-col justify-between gap-4 ">
                                        <div className="flex items-center justify-start gap-1">
                                            <FiUsers className="text-violet-500 text-lg" />    
                                            <p>Agencies</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-start gap-1">
                                            <FiBookOpen className="text-violet-500 text-lg" />
                                            <p>E-Learning</p>
                                        </div>
                                        
                                    </div>

                                    <div className="w-1/3 h-auto flex flex-col justify-between gap-4 ">

                                        <div className="flex items-center justify-start gap-1">
                                            <HiSpeakerphone className="text-violet-500 text-lg" />
                                            <p>Marketing</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-start gap-1">
                                            <IoLocationOutline className="text-violet-500 text-lg" />
                                            <p>Localization</p>
                                        </div>

                                        <div className="flex items-center justify-start gap-1">
                                            <LuShoppingBag className="text-violet-500 text-lg" />
                                            <p>Sales Outreach</p>
                                        </div>
                                        
                                    </div>

                                    <div className="w-1/3 h-auto flex flex-col justify-between gap-4 ">
                                        <div className="flex items-center justify-start gap-1">
                                            <CiVideoOn className="text-violet-500 text-lg" />    
                                            <p>Video Ads</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-start gap-1">
                                            <SlSocialInstagram className="text-violet-500 text-lg" />
                                            <p>Social Media</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                {/**  3.  resources */}
                <div className="relative hidden lg:block">
                    <div 
                    onClick={() => {
                        // already open
                        if(currentOpenTab === 3){
                            setCurrentOpenTab(0)
                        }else {
                            // already closed
                            setCurrentOpenTab(3)
                        }
                    }}
                    className="cursor-pointer flex items-center justify-between gap-2">
                        <h3 className={` ${currentOpenTab === 3 ? "text-violet-500" : "text-black"}`}>Resources</h3>
                        {
                            currentOpenTab === 3 ?
                            <IoIosArrowUp  className="text-violet-500"  />
                            :
                            <IoIosArrowDown  />
                        }
                    </div>

                    {
                        currentOpenTab === 3 
                        &&
                        <div className="absolute -bottom-48 left-0  rounded-3xl px-4 py-4 w-[500px] bg-white h-auto text-lg ">
                            <div className="h-auto w-full">
                                
                                
                                <div className="flex items-start mt-4 justify-between h-auto w-full font-semibold text-[16px] ">
                                    <div className="w-1/3 h-auto flex flex-col justify-between gap-4 ">
                                        <div className="flex items-center justify-start gap-1">
                                            <FiUsers className="text-violet-500 text-lg" />    
                                            <p>Agencies</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-start gap-1">
                                            <FiBookOpen className="text-violet-500 text-lg" />
                                            <p>E-Learning</p>
                                        </div>
                                        
                                    </div>

                                    <div className="w-1/3 h-auto flex flex-col justify-between gap-4 ">

                                        <div className="flex items-center justify-start gap-1">
                                            <HiSpeakerphone className="text-violet-500 text-lg" />
                                            <p>Marketing</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-start gap-1">
                                            <IoLocationOutline className="text-violet-500 text-lg" />
                                            <p>Localization</p>
                                        </div>

                                        <div className="flex items-center justify-start gap-1">
                                            <LuShoppingBag className="text-violet-500 text-lg" />
                                            <p>Sales Outreach</p>
                                        </div>
                                        
                                    </div>

                                    <div className="w-1/3 h-auto flex flex-col justify-between gap-4 ">
                                        <div className="flex items-center justify-start gap-1">
                                            <CiVideoOn className="text-violet-500 text-lg" />    
                                            <p>Video Ads</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-start gap-1">
                                            <SlSocialInstagram className="text-violet-500 text-lg" />
                                            <p>Social Media</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                {/**  4 .  pricing */}
                <div className="relative hidden lg:block">
                    <div 
                    onClick={() => {
                        // already open
                        if(currentOpenTab === 4){
                            setCurrentOpenTab(0)
                        }else {
                            // already closed
                            setCurrentOpenTab(4)
                        }
                    }}
                    className="cursor-pointer flex items-center justify-between gap-2">
                        <h3 className={` ${currentOpenTab === 4 ? "text-violet-500" : "text-black"}`}>Pricing</h3>
                        {
                            currentOpenTab === 4 ?
                            <IoIosArrowUp  className="text-violet-500"  />
                            :
                            <IoIosArrowDown  />
                        }
                    </div>

                    {
                        currentOpenTab === 4
                        &&
                        <div className="absolute -bottom-36 left-0  rounded-3xl px-4 py-4 w-[200px] bg-white h-auto text-lg ">
                            <div className="h-auto w-full">
                                
                                
                                <div className="flex items-start mt-4 justify-between h-auto w-full font-semibold text-[16px] ">
                                    <div className="w-full h-auto flex flex-col justify-between gap-4 ">
                                        <div className="flex items-center justify-start gap-1">
                                            <PiNotePencil className="text-violet-500 text-lg" />    
                                            <p>Pricing Plans</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-start gap-1">
                                            <AiOutlineDollarCircle className="text-violet-500 text-lg" />
                                            <p>API Pricing</p>
                                        </div>
                                        
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    }
                </div>

                {/**  Enterprise */}
                <div className="hidden lg:block">
                    <div className="cursor-pointer flex items-center justify-between gap-2 ">
                        <h3>Enterprise</h3>
                    </div>
                </div>

                {/**  5 . company  */}
                <div className="relative hidden lg:block">
                    <div 
                    onClick={() => {
                        // already open
                        if(currentOpenTab === 5){
                            setCurrentOpenTab(0)
                        }else {
                            // already closed
                            setCurrentOpenTab(5)
                        }
                    }}
                    className="cursor-pointer flex items-center justify-between gap-2">
                        <h3 className={` ${currentOpenTab === 5 ? "text-violet-500" : "text-black"}`}>Company</h3>
                        {
                            currentOpenTab === 5 ?
                            <IoIosArrowUp className="text-violet-500"  />
                            :
                            <IoIosArrowDown  />
                        }
                    </div>

                    {
                        currentOpenTab === 5 
                        &&
                        <div className="absolute -bottom-56 left-0  rounded-3xl px-4 py-4 w-[200px] bg-white h-auto text-lg ">
                            <div className="h-auto w-full">
                                
                                
                                <div className="flex items-start mt-4 justify-between h-auto w-full font-semibold text-[16px] ">
                                    <div className="w-full h-auto flex flex-col justify-between gap-4 ">
                                        <div className="flex items-center justify-start gap-1">
                                            <FiHome className="text-violet-500 text-lg" />    
                                            <p>About Us</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-start gap-1">
                                            <IoBagSharp className="text-violet-500 text-lg" />
                                            <p>Careers</p>
                                        </div>

                                        <div className="flex items-center justify-start gap-1">
                                            <IoMdEye className="text-violet-500 text-lg" />
                                            <p>Trust & Safety</p>
                                        </div>

                                        <div className="flex items-center justify-start gap-1">
                                            <VscSparkleFilled className="text-violet-500 text-lg" />
                                            <p>AI Research</p>
                                        </div>
                                        
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            {/**   right part  */}
            <div className="flex items-center justify-between gap-3 text-[13px]">
                <div className="text-center rounded-3xl bg-gray-200 text-black font-bold px-5 py-2 hover:text-[#A45BD2] cursor-pointer hidden lg:block">Login</div>
                <div className="text-center rounded-3xl bg-black text-white text-sm px-5 font-bold py-2 hover:bg-[#A45BD2] cursor-pointer hidden md:block ">Sign up for free</div>
                <div className="text-center rounded-3xl bg-black text-white text-sm px-5 font-bold py-2 hover:bg-[#A45BD2] cursor-pointer block md:hidden ">Sign up</div>
                <div>
                    {
                        isMenueOpen ?
                        <RxCross2 className="text-2xl cursor-pointer block lg:hidden" onClick={() => setIsMenueOpen(state => !state)} />
                        :
                        <MdOutlineMenu className="text-2xl cursor-pointer block lg:hidden" onClick={() => setIsMenueOpen(state => !state)} />
                    }
                </div>
            </div>

        </div>
        {
            isMenueOpen &&
            <div className="bg-white fixed top-0 left-0 z-40 w-full h-auto mt-28 pb-10 px-2">
                <div className=" flex flex-col  justify-between gap-8 h-auto  w-full text-xl font-semibold text-black">
                    {/**  1. platform */}
                    <div className="relative ">
                        <div
                        onClick={() => {
                            // already open
                            if(currentOpenTab === 1){
                                setCurrentOpenTab(0)
                            }else {
                                // already closed
                                setCurrentOpenTab(1)
                            }
                        }}
                        className="relative  cursor-pointer flex items-center justify-between gap-2 px-2">
                            <h3 className={` ${currentOpenTab === 1 ? "text-violet-500" : "text-black"}`}>Platform</h3>
                            {
                                currentOpenTab === 1 ?
                                <IoIosArrowUp  className="text-violet-500"  />
                                :
                                <IoIosArrowDown  />
                            }
                            
                        </div>

                        {
                            currentOpenTab === 1 
                            &&
                            <div className="  bg-white rounded-3xl px-4 py-4 w-full h-auto text-lg mt-4 ">
                                <div className="h-auto w-full">
                                    
                                    <div className="flex items-center justify-between h-auto w-full  ">
                                        <h4 className=" h-auto text-gray-400 font-bold w-1/2">PRODUCTS</h4>
                                        <h4 className="  h-auto text-gray-400 font-bold w-1/2 ">FEATURES</h4>
                                    </div>
                                    <div className="flex items-start mt-4 justify-between h-auto w-full font-semibold text-[16px] ">
                                        <div className="w-1/2 h-auto flex flex-col justify-between gap-4 ">
                                            <div className="flex items-center justify-start gap-1">
                                                <LuSquareUser className="text-violet-500 text-lg" />    
                                                <p>Video Avatars</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-start gap-1">
                                                <GoLightBulb className="text-violet-500 text-lg" />
                                                <p>Avatar IV</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-start gap-1">
                                                <LuSquareUser className="text-violet-500 text-lg" />    
                                                <p>Photo Avatars</p>
                                            </div>
                                            
                                        </div>

                                        <div className="w-1/2 h-auto flex flex-col justify-between gap-4 ">

                                            <div className="flex items-center justify-start gap-1">
                                                <LuUser className="text-violet-500 text-lg" />
                                                <p>Stock Avatars</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-start gap-1">
                                                <LuServerCog className="text-violet-500 text-lg" />
                                                <p>API</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {/**  2.  solution  */}
                    <div className="relative ">
                        <div 
                        onClick={() => {
                            // already open
                            if(currentOpenTab === 2){
                                setCurrentOpenTab(0)
                            }else {
                                // already closed
                                setCurrentOpenTab(2)
                            }
                        }}
                        className="cursor-pointer flex items-center justify-between gap-2 px-2">
                            <h3 className={` ${currentOpenTab === 2 ? "text-violet-500" : "text-black"}`}>Solutions</h3>
                            {
                                currentOpenTab === 2 ?
                                <IoIosArrowUp  className="text-violet-500"  />
                                :
                                <IoIosArrowDown  />
                            }
                        </div>

                        {
                            currentOpenTab === 2 
                            &&
                            <div className="mt-4  rounded-3xl  py-4 w-full bg-white h-auto text-lg ">
                                <div className="h-auto w-full">
                                    
                                    
                                    <div className="flex items-start mt-4 justify-between h-auto w-full font-semibold text-sm ">
                                        <div className="w-1/3 h-auto flex flex-col justify-between gap-4 ">
                                            <div className="flex items-center justify-start gap-1">
                                                <FiUsers className="text-violet-500 text-[16px]" />    
                                                <p>Agencies</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-start gap-1">
                                                <FiBookOpen className="text-violet-500 text-[16px]" />
                                                <p>E-Learning</p>
                                            </div>
                                            
                                        </div>

                                        <div className="w-1/3 h-auto flex flex-col justify-between gap-4 text-sm ">

                                            <div className="flex items-center justify-start gap-1">
                                                <HiSpeakerphone className="text-violet-500 text-[16px]" />
                                                <p>Marketing</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-start gap-0.5">
                                                <IoLocationOutline className="text-violet-500 text-[18px]" />
                                                <p className="text-[13px]">Localization</p>
                                            </div>

                                            <div className="flex items-center justify-start gap-1">
                                                <LuShoppingBag className="text-violet-500 text-[16px]" />
                                                <p>Sales Outreach</p>
                                            </div>
                                            
                                        </div>

                                        <div className="w-1/3 h-auto flex flex-col justify-between gap-4 text-sm">
                                            <div className="flex items-center justify-start gap-1">
                                                <CiVideoOn className="text-violet-500 text-[16px]" />    
                                                <p>Video Ads</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-start gap-1">
                                                <SlSocialInstagram className="text-violet-500 text-[14px]" />
                                                <p>Social Media</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {/**  3.  resources */}
                    <div className="relative ">
                        <div 
                        onClick={() => {
                            // already open
                            if(currentOpenTab === 3){
                                setCurrentOpenTab(0)
                            }else {
                                // already closed
                                setCurrentOpenTab(3)
                            }
                        }}
                        className="cursor-pointer flex items-center justify-between gap-2 px-2">
                            <h3 className={` ${currentOpenTab === 3 ? "text-violet-500" : "text-black"}`}>Resources</h3>
                            {
                                currentOpenTab === 3 ?
                                <IoIosArrowUp  className="text-violet-500"  />
                                :
                                <IoIosArrowDown  />
                            }
                        </div>

                        {
                            currentOpenTab === 3 
                            &&
                            <div className="mt-4  rounded-3xl  py-4 w-full bg-white h-auto text-lg ">
                                <div className="h-auto w-full">
                                    
                                    
                                    <div className="flex items-start mt-4 justify-between h-auto w-full font-semibold text-sm ">
                                        <div className="w-1/3 h-auto flex flex-col justify-between gap-4 ">
                                            <div className="flex items-center justify-start gap-1">
                                                <FiUsers className="text-violet-500 text-[16px]" />    
                                                <p>Agencies</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-start gap-1">
                                                <FiBookOpen className="text-violet-500 text-[16px]" />
                                                <p>E-Learning</p>
                                            </div>
                                            
                                        </div>

                                        <div className="w-1/3 h-auto flex flex-col justify-between gap-4 text-sm ">

                                            <div className="flex items-center justify-start gap-1">
                                                <HiSpeakerphone className="text-violet-500 text-[16px]" />
                                                <p>Marketing</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-start gap-0.5">
                                                <IoLocationOutline className="text-violet-500 text-[18px]" />
                                                <p className="text-[13px]">Localization</p>
                                            </div>

                                            <div className="flex items-center justify-start gap-1">
                                                <LuShoppingBag className="text-violet-500 text-[16px]" />
                                                <p>Sales Outreach</p>
                                            </div>
                                            
                                        </div>

                                        <div className="w-1/3 h-auto flex flex-col justify-between gap-4 text-sm">
                                            <div className="flex items-center justify-start gap-1">
                                                <CiVideoOn className="text-violet-500 text-[16px]" />    
                                                <p>Video Ads</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-start gap-1">
                                                <SlSocialInstagram className="text-violet-500 text-[14px]" />
                                                <p>Social Media</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {/**  4 .  pricing */}
                    <div className="relative ">
                        <div 
                        onClick={() => {
                            // already open
                            if(currentOpenTab === 4){
                                setCurrentOpenTab(0)
                            }else {
                                // already closed
                                setCurrentOpenTab(4)
                            }
                        }}
                        className="cursor-pointer flex items-center justify-between gap-2 px-2">
                            <h3 className={` ${currentOpenTab === 4 ? "text-violet-500" : "text-black"}`}>Pricing</h3>
                            {
                                currentOpenTab === 4 ?
                                <IoIosArrowUp  className="text-violet-500"  />
                                :
                                <IoIosArrowDown  />
                            }
                        </div>

                        {
                            currentOpenTab === 4
                            &&
                            <div className="mt-4 rounded-3xl px-4 py-4 w-full bg-white h-auto text-lg ">
                                <div className="h-auto w-full">
                                    
                                    
                                    <div className="flex items-start mt-4 justify-between h-auto w-full font-semibold text-[16px] ">
                                        <div className="w-full h-auto flex flex-col justify-between gap-4 ">
                                            <div className="flex items-center justify-start gap-2">
                                                <PiNotePencil className="text-violet-500 text-lg" />    
                                                <p>Pricing Plans</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-start gap-2">
                                                <AiOutlineDollarCircle className="text-violet-500 text-lg" />
                                                <p>API Pricing</p>
                                            </div>
                                            
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    {/**  Enterprise */}
                    <div className="">
                        <div className="cursor-pointer flex items-center justify-between gap-2 px-2">
                            <h3>Enterprise</h3>
                        </div>
                    </div>

                    {/**  5 . company  */}
                    <div className="relative ">
                        <div 
                        onClick={() => {
                            // already open
                            if(currentOpenTab === 5){
                                setCurrentOpenTab(0)
                            }else {
                                // already closed
                                setCurrentOpenTab(5)
                            }
                        }}
                        className="cursor-pointer flex items-center justify-between gap-2 px-2">
                            <h3 className={` ${currentOpenTab === 5 ? "text-violet-500" : "text-black"}`}>Company</h3>
                            {
                                currentOpenTab === 5 ?
                                <IoIosArrowUp className="text-violet-500"  />
                                :
                                <IoIosArrowDown  />
                            }
                        </div>

                        {
                            currentOpenTab === 5 
                            &&
                            <div className="mt-4 rounded-3xl px-4 py-4 w-full bg-white h-auto text-lg ">
                                <div className="h-auto w-full">
                                    
                                    
                                    <div className="flex items-start mt-4 justify-between h-auto w-full font-semibold text-[16px] ">
                                        <div className="w-full h-auto flex flex-col justify-between gap-4 ">
                                            <div className="flex items-center justify-start gap-2">
                                                <FiHome className="text-violet-500 text-lg" />    
                                                <p>About Us</p>
                                            </div>
                                            
                                            <div className="flex items-center justify-start gap-2">
                                                <IoBagSharp className="text-violet-500 text-lg" />
                                                <p>Careers</p>
                                            </div>

                                            <div className="flex items-center justify-start gap-2">
                                                <IoMdEye className="text-violet-500 text-lg" />
                                                <p>Trust & Safety</p>
                                            </div>

                                            <div className="flex items-center justify-start gap-2">
                                                <VscSparkleFilled className="text-violet-500 text-lg" />
                                                <p>AI Research</p>
                                            </div>
                                            
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="text-center rounded-3xl bg-gray-300 text-black mt-10 px-5 py-2 hover:text-[#A45BD2] cursor-pointer ">Login</div>
                    <div className="text-center rounded-3xl bg-black text-white  px-5 font-bold py-2 hover:bg-[#A45BD2] cursor-pointer ">Sign up for free</div>
                </div>
            </div>
        }
    </div>
}