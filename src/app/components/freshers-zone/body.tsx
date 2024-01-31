'use client'


import { useState } from "react"
import Header from "../common_components/header"
import PopularCourses from "../corporate_Training/popularCourses"
import { IoIosClose } from "react-icons/io"
import CallForm from "@/app/common/callForm"
import Modal from "react-modal"
import Category from "../common_components/category"
import FAQ from "@/app/common/faq_page"
import TrustingCompanies from "../common_components/trusting_companies"




export default function Body(){

    const [modalOpen,setModalOpen]=useState(false)

    const data={
        title:"Fresher's Zone",
        desc:"If you are a Fresher, it's a right place",
        button1:true,
        button2:false,
        button1Content:"join now",
        image:"/assets/College-Fresher.jpg"
    }

    const handleModalClose=()=>{
        setModalOpen(false)
      }
    
      const handleLoginClick=()=>{
    
      }
      const handleSignUp=()=>{
     
      }
    return(
        <main>
             <Modal

isOpen={modalOpen}
onRequestClose={()=>setModalOpen(false)}
contentLabel="Example Modal"

className="top-[50%] left-1/2 translate-x-[-50%] -translate-y-1/2   relative shadow-md   px-8 py-16 xl:w-[25%] lg:w-[30%] md:w-[30%] border-0 sm:w-full w-full bg-white"
>
    {modalOpen && <div className="absolute right-[2%] top-[2%]  p-2 bg-white shadow-md rounded-full hover:cursor-pointer border-green-500 border-2" onClick={()=>setModalOpen(false)}>
  <IoIosClose size={20}/>
  </div>}

 

  <CallForm modalClosing={handleModalClose}
         closeLogin={handleLoginClick}
         closeSignUp={handleSignUp}  heading="Want To join" fieldsToShow={['name','email','message','phone']}/>
</Modal>
           <Header bodyData={data} setModalOpen={setModalOpen}/>

           <PopularCourses/>
           <div className="shadow-md bg-gray-50">
            <Category/>
           
           </div>
           <FAQ backgroundColor=""/>
           <TrustingCompanies border={false}/>
        </main>
    )
}