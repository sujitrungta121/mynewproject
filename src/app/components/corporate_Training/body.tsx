'use client'

import FAQ from "@/app/common/faq_page";
import Testimonals from "../common_components/Testimonals";
import About from "../common_components/about";
import TrustingCompanies from "../common_components/trusting_companies";
import PopularCourses from "./popularCourses";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import CallForm from "@/app/common/callForm";
import { IoIosClose } from "react-icons/io";
import Header from "../common_components/header";
import aminities from "@/app/common/metadata/aminities";



export default function Body(){
    const [modalOpen,setModalOpen]=useState(false)

    const headerData={
      title:"Does your Team have the  Right Corporate Skills for Better Management?",
      desc:"Talk to Our Skilled Trainers to Help Your employees perform Better",
      subItems:aminities,
      button1:true,
      button2:true,
      button1Content:"Request for a call",
      button2Content:"Call +91-1234567890",
      image:"/header-images/corporate-trainer.jpg"
      
    }
   

useEffect(() => {
    const body = document.body;
    if (modalOpen) {
   
      body.style.overflow = "hidden";
      body.setAttribute("aria-hidden", "true");
    } else {
   
      body.style.overflow = "visible";
      body.removeAttribute("aria-hidden");
    }

  
    return () => {
      body.style.overflow = "visible";
      body.removeAttribute("aria-hidden");
    };
  }, [modalOpen]);

  const handleModalOpen = () => {
    // Handle modal opening logic here
};

const handleLoginOpen = () => {
    // Handle login opening logic here
};

const handleSignUpOpen = () => {
    // Handle sign up opening logic here
};
    return (
        <main >
         
 <Modal

      isOpen={modalOpen}
      onRequestClose={()=>setModalOpen(false)}
      contentLabel="Example Modal"
  
      className="top-[50%] left-1/2 translate-x-[-50%] -translate-y-1/2   relative shadow-md   px-8 py-16 xl:w-[25%] lg:w-[30%] md:w-[30%] border-0 sm:w-full w-full bg-white"
    >
          {modalOpen && <div className="absolute right-[2%] top-[2%]  p-2 bg-white shadow-md rounded-full hover:cursor-pointer border-green-500 border-2" onClick={()=>setModalOpen(false)}>
        <IoIosClose size={20}/>
        </div>}
      
       
    
       <CallForm setModalOpen={setModalOpen} heading="Request a Call" setOpenLogin={handleLoginOpen} setOpenSignUp={handleSignUpOpen} fieldsToShow={['name','email','message','phone']}/>
    </Modal>
    <Header setModalOpen={setModalOpen} bodyData={headerData}/>
            
            <PopularCourses/>
            
            <About open={false} backgroundColor="white"/>
            <Testimonals/>
            <FAQ backgroundColor="rgb(236 253 245)" />
            <TrustingCompanies border={false}/>

        </main>
    )
}