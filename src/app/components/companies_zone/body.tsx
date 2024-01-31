'use client'

import { useState } from "react";
import Header from "../common_components/header";
import Category from "../common_components/category";
import FAQ from "@/app/common/faq_page";




export default function Body(){
const [modalOpen,setModalOpen]=useState(false)
    const companiesData={
        title:"PROVIDE GREATEST AND LATEST TECHNOLOGIES TRAINING",
        desc:"To your employees for better performance and get much productivity with high quality",
        button1:true,
        button2:false,
        button1Content:"Contact Us",
        image:"/header-images/companies.jpg"
    }
    return(
        <main>
            <Header bodyData={companiesData} setModalOpen={setModalOpen}/>
            <Category/>
              
            <FAQ backgroundColor=""/>
        </main>
    )
}