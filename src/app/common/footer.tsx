'use client'

import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMailBulk,
  FaPhoneAlt
} from "react-icons/fa";
import footerData from "./metadata/footerData";
import { FaPhone } from "react-icons/fa6";
import { SiApple } from "react-icons/si";
import { FaAndroid } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import DropDown from "./dropDown";


export default function Footer({ BackgroundColor }: { BackgroundColor: String }) 


 {

  const [showLanguage,setShowLanguage]=useState(false)

  const language=[
    {
      id:1,
      title:"spanish",
      sideArrow:false,
    },
    {
      id:2,
      title:"Dutch",
      sideArrow:false,
    },
    {
      id:2,
      title:"Hindi",
      sideArrow:false,
    },
  ]
 
  return (
    <main className={` flex flex-col p-4 sm:flex-col md:flex-col gap-4  lg:pl-20 lg:pr-20 lg:pt-4 pb-4`} 
    // style={{ backgroundColor: BackgroundColor? BackgroundColor : "emerald" }}
    style={{backgroundColor:BackgroundColor? `${BackgroundColor}`:"rgb(6 78 59)"}}

    >
      <div className="flex lg:flex-row flex-col gap-4 sm:gap-4 md:gap-4 lg:items-center justify-between border-b pb-3">
        <div className="flex gap-4">
          <span className="text-white text-base  ">
            Terms of service 
          </span>
          <span className="text-white text-base  ">
            Privacy Policy
          </span>
          <span className="text-white text-base">
            site Map
          </span>
        </div>
        <div className="flex flex-row gap-8 ">
          <span className="text-white">Follow Us</span>
          <FaFacebookF color="white" />
          <FaTwitter color="white" />
          <FaInstagramSquare color="white" />
          <FaLinkedin color="white" />
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:gap-4 md:g lg:flex-row justify-between border-b pb-4 lg:pb-16 lg:pt-16">
        {footerData.map((item) => {
      
          return (
            <div key={item.id} className="flex flex-col gap-4">
              <span className="text-white text-base ">
                {item.title}
              </span>
              <div className="flex flex-col gap-2 hover:undeline">
                {item.contents.map((subItem) => {
                  return (
                    <div
                      key={subItem.id}
                      className="text-gray-400 text-sm  hover:cursor-pointer hover:text-white "
                    >
                      {subItem.title}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="flex flex-col sm:gap-2 gap-8">
          <span className="text-white text-base font-semibold">Subscribe</span>
          <div className={`flex p-4 justify-between ${BackgroundColor==="black" ?  "bg-slate-700":'bg-emerald-800'}`}>
            <input type="email" placeholder="your email address" className={`focus:outline-none focus:border-none text-xs ${BackgroundColor ?"bg-slate-700 ":" bg-emerald-800"} xl:w-full lg:w-full md:w-full sm:w-[70%] w-[60%]`}/>
            <span className="text-white">send</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white">Apps</span>
            <div>
              <div className="flex flex-row gap-2 items-center ">
              <SiApple className="text-gray-400" />

                <span className="text-gray-400">iOS App</span>
              </div>
              <div className="flex flex-row gap-2 items-center ">
              <FaAndroid className="text-gray-400" />

                <span className="text-gray-400">Android App</span>
              </div>
            </div>
            </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col lg:items-center gap-4 justify-between">
        <div className="flex flex-col">
          <span className="text-gray-400 lg:text-base 2xl:text-base xl:text-base md:text-base sm:text-xs text-xs">
            &copy; FreshersKolkata.com All right reserved.
          </span>
          <span className="text-gray-400 lg:text-base 2xl:text-base xl:text-base md:text-base sm:text-xs text-xs">Developed by iekmasolutions</span>
        </div>
       <div onClick={()=>{console.log(showLanguage);setShowLanguage(true)}}className={`flex relative w-[20%] lg:w-[10%] sm:w-full w-full md:w-[10%] gap-2 items-center justify-center ${BackgroundColor? "bg-slate-500": "bg-emerald-800"} p-4 hover:cursor-pointer`} onMouseEnter={()=>setShowLanguage(true)} onMouseLeave={()=>setShowLanguage(false)}>
        <span>English</span>
        <IoMdArrowDropup/>
        {showLanguage && <DropDown bottomValue={30} rightValue={10} border={true} topValue={0} position="bottom" dropDownItem={language} />}

       </div>
      </div>
    </main>
  );
}
