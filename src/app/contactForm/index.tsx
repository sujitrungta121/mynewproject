'use client'

import { FaSearch } from "react-icons/fa";
import FirstPage from "./step1";
import Navbar from "../common/navbar";
import { useState } from "react";
import TabButton from "./tab_button";
import Tabs from "./tabs";
import ThirdForm from "./third_form";
import FourthForm from "./fourth_form";
import Step from "./steps";
import SecondStep from "./secondStep";



export default function Main(){

    const [mobileNav,setMobileNav]=useState(false)
    const [currentStep, setCurrentStep] = useState(0);
    const [chipItems,setChipItems]=useState<string[]>([])
    const [formData,setFormData]=useState({
      name:"",
      email:"",
      phoneNumber:"",
      studentName:"",
      about:"",
      subjects:"",
      interests:"",

    })
    const [error,setError]=useState({
      name:"",
      email:"",
      phoneNumber:"",
      studentName:"",
      about:"",
      subjects:"",
      interests:"",

    })

    const handleChange=(fieldName:string,value:string)=>{
        setFormData({...formData,[fieldName]:value})
    }
  console.log(formData?.interests)
    console.log(formData?.interests,"formData")
    return (
        <main className="flex flex-col  bg-slate-200 h-[100rem] p-0">
           <Navbar backgroundColor="white" setMobileNav={()=>setMobileNav(true)}/>
           

  

  <div className="flex flex-col  xl:items-center 2xl:items-center lg:items-center md:items-center sm:items-center items-center gap-8 pt-8 w-full">

    <span className="text-2xl font-bold ">Join as a Student</span>

  <Step setCurrentStep={setCurrentStep} currentStep={currentStep}/>

{currentStep===0 && <FirstPage chipItems={chipItems} setChipItems={setChipItems} setCurrentStep={setCurrentStep} error={error} setError={setError} formData={formData} setFormData={setFormData}/>}
{currentStep===1 && <SecondStep setCurrentStep={setCurrentStep} error={error} setError={setError} formData={formData} setFormData={setFormData}/>}
{currentStep===2 && <ThirdForm setCurrentStep={setCurrentStep}setError={setError} error={error}  formData={formData} setFormData={setFormData}/>}
{currentStep===3 && <FourthForm setCurrentStep={setCurrentStep}   error={error} setError={setError} formData={formData} setFormData={setFormData}/>}
  </div>


        </main>
    )
}