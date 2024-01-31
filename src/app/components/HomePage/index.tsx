'use client'

import Image from 'next/image'

import { useState } from 'react'
import Navbar from '../../common/navbar'
import Body from './body'
import Footer from '../../common/footer'
import MobileNav from '../../common/mobile_nav'
import navData from '../../common/metadata/navData'
import Header from "./header";

export default function Main() {

    const [mobileNav,setMobileNav]=useState(false);
    const mobileNavData=["BlockChain Training","BlockChain Training","BlockChain Training","BlockChain Training","All Courses"]


  return (
    <main className="flex w-full  flex-col  ">
               {mobileNav && <MobileNav data={navData} setMobileNav={setMobileNav} width=""/>}

      <Navbar setMobileNav={setMobileNav} backgroundColor=""/>
      <Header/>
      <Body />
      <Footer BackgroundColor=""/>
    </main>
  )
}
