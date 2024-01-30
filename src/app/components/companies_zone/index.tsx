'use client'

import Footer from "@/app/common/footer";
import navData from "@/app/common/metadata/navData";
import MobileNav from "@/app/common/mobile_nav";
import Navbar from "@/app/common/navbar";
import { useState } from "react";
import Body from "./body";



export default function CompaniesZone(){

    const [openMobileNav,setOpenMobileNav]=useState(false)
    return (
        <main>
            {openMobileNav && <MobileNav data={navData} setMobileNav={setOpenMobileNav}/>}
            <Navbar backgroundColor="black" setMobileNav={setOpenMobileNav}/>
            <Body/>
            <Footer backgroundColor="black"/>
        </main>
    )
}