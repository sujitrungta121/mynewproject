
'use client'

import Footer from "@/app/common/footer";
import Navbar from "@/app/common/navbar";
import { useState } from "react";
import basicDetails from "../../common/metadata/basic_details"
import FAQ from "@/app/common/faq_page";
import ContactForm from "./contact_form";
import MobileNav from "@/app/common/mobile_nav";
import navData from "@/app/common/metadata/navData";


export default function Contact(){

    const [mobileNav,setMobileNav]=useState(false)
    return (
        <main className="flex flex-col relative">
            <Navbar backgroundColor="black" setMobileNav={setMobileNav}/> 
            {mobileNav && <MobileNav setMobileNav={setMobileNav} data={navData}/>}
            <div className="2xl:bg-amber-400 2xl:m-12    bg-emerald-900 ">

           

          <div className="bg-emerald-900 h-[20rem]  justify-center flex flex-col 2xl:rounded-tl-[12rem] 2xl:rounded-br-[12rem] 2xl:pl-16  p-0">

            <span className="text-white font-bold text-2xl">Contact Us</span>
            <span className="text-white text-base">We’d love to talk about how we can help you.</span>

          </div>
          </div>

          <div className="flex xl:flex-row 2xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col mb-16  pb-16 pt-16 gap-16">
            <div className="flex flex-col gap-4 2xl:pl-24 xl:pl-2 lg:pl-0" >
            <div className="flex flex-col gap-4">
            <span  className="xl:text-xl lg:text-xl 2xl:text-xl md:text-xl sm:text-base text-base font-semibold">Keep in touch with us.</span>
            <div className=" w-[99%] ">
            <span className="xl:text-base lg:text-base 2xl:text-base md:text-base sm:text-xs text-xs">Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis</span>
            </div>
            </div>
          
            <div className="flex flex-col gap-4">  

             {
              basicDetails.map((item)=>{
                return(
                  <div className="flex flex-row gap-4 items-center">
                    <item.icon className="2xl:h-6 2xl:w-6 xl:h-6 xl:w-6 lg:h-6 lg:w-6 md:h-6 mdw-6 sm:h-4 sm:w-4  h-4 w-4"/>
                    <div className="flex flex-col gap-1 ">
                      <span className="xl:text-base lg:text-base 2xl:text-base md:text-base sm:text-xs text-xs">{item.title}</span>
                      <span className="xl:text-base lg:text-base 2xl:text-base md:text-base sm:text-xs text-xs">{item.body}</span>
                    </div>
                  </div>
                )
              })
             }
            
            </div>
            </div>

            <ContactForm heading="Tell us About yourself" description="We will shortly connect with you" boxshadow={false}/>
          
          </div>

     
          <FAQ/>

            <Footer backgroundColor="black"/>
          
        </main>
    )
}