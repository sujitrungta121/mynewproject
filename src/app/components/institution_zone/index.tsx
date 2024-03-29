'use client'

import { useState } from "react";
import MobileNav from "../../common/mobile_nav";
import Navbar from "@/app/common/navbar";
import Footer from "@/app/common/footer";
import Body from "./body";
import navData from "@/app/common/metadata/navData";


export default function InstitutionPage(){
    const [mobileNav,setMobileNav]=useState(false);


  
    return (
        <main>
           
            {mobileNav && <MobileNav data={navData} setMobileNav={setMobileNav} width=""/>}
            <Navbar setMobileNav={setMobileNav} backgroundColor="rgb(0,0,0)"/>

          <Body/>

            <Footer BackgroundColor="rgb(0,0,0)"/>
        </main>
    )
}