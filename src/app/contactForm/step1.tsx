
'use client'
import Selection from "./selectFile";



import { useState } from "react";



// export default function FirstPage({setCurrentStep,error,setError,formData,setFormData}:{setCurrentStep: React.Dispatch<React.SetStateAction<number>>,error:any,setError:React.Dispatch<React.SetStateAction<any>>,formData:any,setFormData:React.Dispatch<React.SetStateAction<any>>,}){
    
export default function FirstPage({setCurrentStep,error,setError,formData,setFormData}:{setCurrentStep: React.Dispatch<React.SetStateAction<number>>,error:any,setError:React.Dispatch<React.SetStateAction<any>>,formData:any,setFormData:React.Dispatch<React.SetStateAction<any>>,}){

    
    return (
        <div className="flex flex-col justify-center items-center w-full gap-4">
                <div className="text-xl font-bold">choose your subjects</div>
                <div className="bg-white w-[50%] p-4 relative h-[10rem] ">
        <Selection setCurrentStep={setCurrentStep} formData={formData} setError={setError} setFormData={setFormData} error={error}/>
        </div>
        </div>
    )
}
