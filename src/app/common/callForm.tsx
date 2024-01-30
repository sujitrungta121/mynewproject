'use client'

import { Span } from 'next/dist/trace'
import React from 'react'
import { useState } from 'react'
// import Tailwind from 'tailwindcss'

export default function CallForm  ({setModalOpen,setOpenLogin,setOpenSignUp,fieldsToShow,heading}:{setModalOpen:React.Dispatch<React.SetStateAction<boolean>>,setOpenLogin:React.Dispatch<React.SetStateAction<boolean>>,setOpenSignUp:React.Dispatch<React.SetStateAction<boolean>>,fieldsToShow:any[],heading:String})  {
  

  const [formData,setFormData]=useState({
  name:"",
  email:"",
  phone:"",
  message:"", 
  password:"",
    })

    const [error,setError]=useState({})


    const handleChange=(e)=>{
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
    const handleBlur=(e)=>{
      const nameField=e.target.name;
       if(e.target.value==="" && error[nameField])e.target.style.borderColor="red";
       e.target.style.borderColor="black"
    }

   

    
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
      for (const field of fieldsToShow) {
        if (!formData[field] && field !== 'message') {
          newErrors[field] = `${field} cannot be empty`;
        }
      }
      setError(newErrors);
      if (Object.keys(newErrors).length === 0) {
        setFormData({
            name:"",
            email:"",
            message:"",
            phone:""
          })
        console.log('Form submitted:', formData);
        setModalOpen(false)
        setOpenLogin(false);
        setOpenSignUp(false)
      }
     
    };


  return (
   
    <div className="flex flex-col w-full max-w-md gap-2 bg-white z-50">
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
           {error.phone && <span className="text-red-600">{error.phone}</span>}
        </div>}
     { fieldsToShow?.includes('message') &&  <div className="mb-6">
          <textarea
            rows="4"
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
       
        <div className="mt-8 flex justify-center w-full" onClick={handleSubmit}>
          <button type="submit" className="p-4 rounded-full bg-green-600 text-white font-semibold focus:outline-none focus:ring-2 w-full focus:ring-green-600">submit</button>
        </div>
      </form>
</div>
  )}