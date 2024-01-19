'use client'

import React, { useState } from 'react';
import freshKol from "../../../public/fres_kol_logo.png"
import Image from 'next/image';
import { MdArrowDropDown } from "react-icons/md";
import DropDown from '../common/dropDown';
import { FaCaretUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from './mobile_nav';
import { FaSearch } from "react-icons/fa";
import navData from '../common/metadata/navData';

export default function Navbar({setMobileNav}:{setMobileNav:React.Dispatch<React.SetStateAction<boolean>>}) {

  console.log(setMobileNav,"setmovile")
  const [dropDown,setDropDown]=useState(false)
  

  const handleMouseEnter=()=>{
   setDropDown(true)
  }
console.log(dropDown)
  const dropDownItem=["Job Training","coorporate Training","Freshers Training","Summer Training"]
  return (
    <main className="flex flex-row w-full justify-between  border-b lg:border-none">

      <div className="flex-none w-[60%] bg-white p-4">
        <div className="flex flex-col">

          <div className="flex flex-row items-center gap-12">
            <Image src="/fres_kol_logo.png" alt="no image" width={200} height={200}/>
            <div className="flex flex-row  gap-4">
           {
            navData?.map((item)=>{
              return(
                <div className="flex flex-row items-center gap-4">
                     <span>{item.title}</span>
                     <MdArrowDropDown/>
                </div>
              )
            })
           }
           </div>

        </div>
     <div className="flex flex-col gap-4 pt-16 w-[50%]">
      <div className="flex flex-col gap-2">
      <span className="text-emerald-900 font-bold text-4xl ">With talented <strong className="text-green-500 text-4xl">Freelancers</strong> Do more work</span>
      <span>Millions of people use freeio.com to turn their ideas into reality.</span>
      </div>
      <div className="border border-black flex justify-between p-2 items-center w-full">
        <div className="flex items-center gap-4">
      <FaSearch/>
        <input type="text" placeholder="what are you looking for" />
        </div>
        <div className="bg-emerald-900 p-4 rounded-md items-center justify-center">
          <button className="text-white">Search</button>
        </div>
      </div>
      <span>Popular Searches : Designer, Developer, Web, IOS, PHP, Senior, Engineer</span>
     </div>

        </div>
            
      </div>

      <div className="flex-1 bg-red-200 p-4 relative h-[38rem]">
      <div className="flex flex-col gap-8 ">
        <div className="flex gap-4 p-4">
      <FaSearch/>
      <span>Become a member </span>
      <div>
      <span>Become a login</span>
      </div>
      <div>
      <span>Login</span>
      </div>
      <div className="bg-emerald-900 rounded-md p-2 items-center justify-center">
      <span className="text-white">Signup</span>
      </div>
      </div>
      <div className="flex p-0 absolute bottom-0 z-0 left-[-10%]">
  <Image src="/side_banner.png" alt="no image" width={500} height={900} />
</div>

      </div>


      </div>
      


    </main>
  );
};


