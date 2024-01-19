'use client'

import Image from 'next/image'

import { useState } from 'react'
import Navbar from './navbar'
import Body from './body'
import Footer from './footer'
import MobileNav from './mobile_nav'

export default function Main() {

    const [mobileNav,setMobileNav]=useState(false);
    const mobileNavData=["BlockChain Training","BlockChain Training","BlockChain Training","BlockChain Training","All Courses"]

  return (
    <main className="flex w-full h-full flex-col  ">
               {mobileNav && <MobileNav data={mobileNavData} setMobileNav={setMobileNav}/>}

      <Navbar setMobileNav={setMobileNav}/>
      <Body />
      <Footer/>
    </main>
  )
}
