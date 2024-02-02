// 'use client'

import React from 'react'
import { useState } from 'react'
import Login from '../components/loginForm';


interface ErrorType {
  [key: string]: String; 
}    
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  password: string;
}


const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
  password: "",
};



  export default function CallForm  ({modalClosing,closeLogin,closeSignUp,fieldsToShow,heading,action}:{modalClosing:React.Dispatch<React.SetStateAction<boolean>>,action:String,closeLogin:React.Dispatch<React.SetStateAction<boolean>>,closeSignUp:React.Dispatch<React.SetStateAction<boolean>>,fieldsToShow:String[],heading:String})  {


  const [formData, setFormData] = useState<FormData>(initialFormData);


    const [error, setError] = useState<ErrorType>({});


    const handleChange=(e:any)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      })
    }
    const handleFocus=(e:any)=>{
      const nameField=e.target.name;
      if(e.target.value==="" && error[nameField])e.target.style.borderColor="red";
  
      else e.target.style.borderColor="black";
    }
    const handleBlur=(e:any)=>{
      const nameField=e.target.name;
       if(e.target.value==="" && error[nameField])e.target.style.borderColor="red";
       e.target.style.borderColor="black"
    }

   
            

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      const newErrors: ErrorType = {};
           
      for (const field of fieldsToShow) {
        if (!formData[field as keyof FormData] && field !== 'message') {
          newErrors[field as keyof FormData]= `${field} cannot be empty`;
        }
      }
       
      setError(newErrors);
    
      // if (Object.keys(newErrors).length === 0) {
      //   console.log(formData)

      //   // if(action==="login" || action==="signup"){
      //     try {
      //       const response = await Login(formData);
      //           console.log(response);
      //           if (response.status === "200") {
      //             console.log("form submitted")
              
      //         //     setform(initialform);
             
      //         //  setOpenModal(true)
                 
      //     }
      //   } 
      //   catch (error) {
      //     console.error('Error submitting form:', error);
          
      //   }
      //   // }

      //   setFormData({
      //     name: "",
      //     email: "",
      //     message: "",
      //     phone: "",
      //     password:""
      //   });
    
                  
      //       console.log('Form submitted:', formData);
     

      //   modalClosing(false);
      //   closeSignUp(false);
      //   closeLogin(false);

      // }

      if (Object.keys(newErrors).length === 0) {
      
        try {
          const response = await Login(formData);
              console.log(response);
              if (response.status === "200") {
                console.log("form submitted")
            
            //     setform(initialform);
           
            //  setOpenModal(true)
               
        }
      } 
      catch (error) {
        console.error('Error submitting form:', error);
        
      } 
      } 
    };
    


  return (
   
    <div className="flex flex-col w-full max-w-md gap-2 bg-white z-40">
      <h2 className="text-2xl font-bold text-center mb-8 text-green-600">{heading}</h2>
      <form onSubmit={handleSubmit}>
      {fieldsToShow?.includes('name') &&  <div className="mb-6 w-full">
         <input onBlur={handleBlur} onFocus={handleFocus}
            type="text"
            id="name"
            name="name"
            className={`p-4 rounded-full border border-gray-300 w-full  text-gray-700 focus:outline-none `}
            value={formData?.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
         {error.name && <span className="text-red-600">{error.name}</span>}
        </div>}
        {fieldsToShow?.includes('email') &&<div className="mb-6">
         <input onBlur={handleBlur} onFocus={handleFocus}
            type="email"
            id="email"
            placeholder="email"
            name="email"
            className={`p-4 rounded-full border border-gray-300 w-full  text-gray-700 focus:outline-none  `}
            value={formData?.email}
            onChange={handleChange}
            required 
          />
           {error.email && <span className="text-red-600">{error.email}</span>}
        </div>}
     { fieldsToShow?.includes('phone') &&  <div className="mb-6">
         <input onBlur={handleBlur} onFocus={handleFocus}
            type="number"
            id="phone"
            name="phone"
            placeholder="enter your contact number"
            className={`p-4 rounded-full border border-gray-300 w-full text-gray-700 focus:outline-none `}
            value={formData?.phone}
            onChange={handleChange}
            required
          />
           {error.phone && <span className="text-red-600">{error.phone}</span>}
        </div>}

        { fieldsToShow?.includes('password') &&  <div className="mb-6">
         <input onBlur={handleBlur} onFocus={handleFocus}
            type="password"
            id="password"
            name="password"
            placeholder="Enter the Password"
            className={`p-4 rounded-full border border-gray-300 w-full text-gray-700 focus:outline-none `}
            value={formData?.password}
            onChange={handleChange}
            required
          />
           {error.password && <span className="text-red-600">{error.password}</span>}
        </div>}
     { fieldsToShow?.includes('message') &&  <div className="mb-6">
          <textarea
            rows={4}
            id="message"
            name="message"
            placeholder="Write about your self"
            className={`p-4 rounded-md border border-gray-300 w-full text-gray-700 focus:outline-none focus:ring-2  focus:ring-green-600`}
            value={formData?.message}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            required
          />
        </div>}
       
        <div className="mt-8 flex justify-center w-full" onClick={(e)=>handleSubmit(e)}>
          <button type="submit" className="p-4 rounded-full bg-green-600 text-white font-semibold focus:outline-none focus:ring-2 w-full focus:ring-green-600">submit</button>
        </div>
      </form>
</div>
  )}


