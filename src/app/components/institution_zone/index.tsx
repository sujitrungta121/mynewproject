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
           
            {mobileNav && <MobileNav data={navData} setMobileNav={setMobileNav}/>}
            <Navbar setMobileNav={setMobileNav} backgroundColor="black"/>

          <Body/>

            <Footer backgroundColor="black"/>
        </main>
    )
}