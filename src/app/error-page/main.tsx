'use client'

import { useState } from "react";
import navData from "../common/metadata/navData";
import MobileNav from "../common/mobile_nav";
import Navbar from "../common/navbar";
import ResponsePage from "../common/response_page";
import Footer from "../common/footer";


export default function MainPage(){

    const [mobileNav,setMobileNav]=useState(false);
    const data = {
        id: 1,
        image: "/error_img.png",
        code: "404",
        message: "Oops! It looks like you're lost.",
        description: "The page you're looking for isn't available. Try to search again or use the go-to",
      };
    
      return (
        <main>
               {mobileNav && <MobileNav data={navData} setMobileNav={setMobileNav}/>}
          <Navbar backgroundColor="black" setMobileNav={setMobileNav}/>
          <ResponsePage data={data} />
          <Footer backgroundColor="black"/>
        </main>
      );
}