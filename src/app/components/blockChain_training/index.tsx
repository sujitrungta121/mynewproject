'use client'

import Footer from "@/app/common/footer";
import Navbar from "@/app/common/navbar";
import Body from "./body";
import { useState } from "react";
import MobileNav from "@/app/common/mobile_nav";
import navData from "@/app/common/metadata/navData";



export default function BlockChain(){


    const [mobileNav,setMobileNav]=useState(false);
    return(
        <main>
            {mobileNav && <MobileNav setMobileNav={setMobileNav} data={navData} width=""/>}
            <Navbar backgroundColor="rgb(0,0,0)" setMobileNav={setMobileNav}/>
             <Body/>
            <Footer BackgroundColor="rgb(0,0,0)"/>
        </main>
    )
}