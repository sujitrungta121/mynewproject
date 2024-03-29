'use client'

import { useState } from "react";
import Navbar from "../common/navbar";
import ResponsePage from "../common/response_page";
import Footer from "../common/footer";
import MobileNav from "../common/mobile_nav";
import navData from "../common/metadata/navData";


export default function MainPage(){

    const data={
        id:1,
        code:"201",
        image:'/header-images/error_img.png',
        message:"Thanks for Visiting our page",
        description:"One of our team member will shortly connect with you"
    }

    const [mobileNav,setMobileNav]=useState(false)
    return (
        <main>

{mobileNav && <MobileNav data={navData} setMobileNav={setMobileNav} width=""/>}

            <Navbar backgroundColor="rgb(0,0,0)" setMobileNav={setMobileNav} />

            <ResponsePage data={data}/>

             <Footer BackgroundColor="rgb(0,0,0)"/>
        </main>
    )
}