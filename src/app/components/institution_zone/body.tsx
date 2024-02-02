'use client'


import CallForm from "@/app/common/callForm"
import { useState } from "react"
import { IoIosClose } from "react-icons/io"
import Modal from "react-modal"
import Header from "../common_components/header"
import PopularCourses from "../corporate_Training/popularCourses"
import Testimonals from "../common_components/Testimonals"
import FAQ from "@/app/common/faq_page"


export default function Body(){


    const [modalOpen,setModalOpen]=useState(false)

    const institutionsData={
        title:"WE PROVIDE MAJOR AND LIVE PROJECT TRAINING",
       desc: "With latest technoligies by experienced and working professionals. Project will be on latest ideas with most popular technoligies. Each project will have only 10-12 students with 1:1 resource.",
       button1:true,
       button2:false,
       button1Content:"Contact Us",
       button2Content:"call us",

       image:"/header-images/institution.jpeg"
    }
    const handleModalClose=()=>{
        setModalOpen(false)
      }
    
      const handleLoginClick=()=>{
    
      }
      const handleSignUp=()=>{
       
      }
    return (
        <main>
             <Modal

isOpen={modalOpen && !(institutionsData?.button1Content.toLowerCase().slice(0,7)==="contact")}
onRequestClose={()=>setModalOpen(false)}
contentLabel="Example Modal"

className="top-[50%] left-1/2 translate-x-[-50%] -translate-y-1/2   relative shadow-md   px-8 py-16 xl:w-[25%] lg:w-[30%] md:w-[30%] border-0 sm:w-full w-full bg-white"
>
    {modalOpen && <div className="absolute right-[2%] top-[2%]  p-2 bg-white shadow-md rounded-full hover:cursor-pointer border-green-500 border-2" onClick={()=>setModalOpen(false)}>
  <IoIosClose size={20}/>
  </div>}

 

  <CallForm   modalClosing={handleModalClose}
         closeLogin={handleLoginClick}
         closeSignUp={handleSignUp} heading="Request a Call" fieldsToShow={['name','email','message','phone']}/>
</Modal>

<Header bodyData={institutionsData} setModalOpen={setModalOpen} click={true}/>

<PopularCourses/>

<Testimonals/>

<FAQ backgroundColor=""/>
        </main>
    )
}