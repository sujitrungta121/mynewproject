'use client'

import Footer from "@/app/common/footer";
import navData from "@/app/common/metadata/navData";
import MobileNav from "@/app/common/mobile_nav";
import Navbar from "@/app/common/navbar";
import { useState } from "react";
import Body from "./body";



export default function FreshersZone(){

    const [mobileNav,setMobileNav]=useState(false)
    return (
        <main>
            {mobileNav && <MobileNav data={navData} setMobileNav={setMobileNav} width=""/>}
        <Navbar backgroundColor="rgb(0,0,0)"setMobileNav={setMobileNav}/>
      
 <Body/>
      

        <Footer BackgroundColor="rgb(0,0,0)" />
        </main>
    )
}