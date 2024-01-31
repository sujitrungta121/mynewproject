'use client'

import { useState } from "react";
import Footer from "../../common/footer";
import Navbar from "../../common/navbar";
import { useRouter } from "next/navigation";
import Body from "./body";
import MobileNav from "@/app/common/mobile_nav";
import navData from "@/app/common/metadata/navData";



export default function InnerPage(){

    const router =useRouter()
    const black="black"

    const [mobileNav,setMobileNav]=useState(false)
    return (
        <main>
            {mobileNav && <MobileNav setMobileNav={setMobileNav} data={navData}/>}
            <Navbar setMobileNav={setMobileNav} backgroundColor="rgb(0,0,0)"/>
             <Body/>
            <Footer BackgroundColor="rgb(0 0 0)"/>
        </main>
    )
}