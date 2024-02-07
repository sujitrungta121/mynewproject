// 'use server';

'use client'

import React,  from 'react';
import { MdArrowOutward } from 'react-icons/md';
import submitContact from '@/app/contact-page/submitForm';
import Modal from "react-modal"
import { IoClose } from 'react-icons/io5';
import { IoIosClose } from 'react-icons/io';
import Login from "../loginForm"
import { Email } from '@/app/common/sendinEnail';
import { Button, Input } from 'antd';
import submitForm from './submit_form';



const ContactForm = ({setCurrentStep,formData,setFormData,error,setError }: { setCurrentStep:React.Dispatch<React.SetStateAction<number>>,error:any,setError:React.Dispatch<React.SetStateAction<any>>,formData:any,setFormData:React.Dispatch<React.SetStateAction<any>> }) => {



  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  

  // const handleSubmit =  async() => {
  //   const {
  //     name,email,about,studentName,phoneNumber
  //   }=formData
  // const obj={
  //   name,email,about,studentName,phoneNumber
  // }
  // const cleanedObject=JSON.stringify(obj)
  // console.log(cleanedObject)
  //   try {
  //           // const response = await submitContact(formData?.name,formData?.email,formData?.phoneNumber,formData?.about,formData?.studentName);
  //           console.log(cleanedObject,"cleaned object")
  //           const response = await submitContact(cleanedObject);

  //           console.log(response)
  //               //  setSubmitted(true);
              
  //               //   setform(initialform);
             
  //             //  setOpenModal(true)
                 
  //         }
        
  //       catch (error) {
  //         console.error('Error submitting form:', error);
          
  //       } 

  //   }
  const handleSubmit = async () => {
    const data = JSON.parse(JSON.stringify(formData));
    try {
      const response = await submitContact(data);
      console.log(response);
      // Handle the response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error
    }
  };
  
  


  return (
    <main className="bg-white shadow-md sm:shadow-lg rounded-md mb-16 p-8">
     
  

      <div>
        <div className="flex flex-col gap-2">
        
        </div>

        <div className="p-4">
          <form method="POST" className="flex flex-col space-x-8 space-y-8 gap-8">
            <div className="flex flex-col space-y-8  w-full">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-base font-medium text-gray-700 bold">Name</label>
                  <Input placeholder="input with clear icon" name="name" id="name" allowClear value={formData?.name} onChange={onChange} />
                  {error?.name && <span>{error?.name}</span>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-base font-medium text-gray-700 ">Contact Email</label>
                  <Input placeholder="your email" value={formData?.email} name="email" id="email" allowClear onChange={onChange} />
                  {error?.email && <span>{error?.email}</span>}
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-base font-medium text-gray-700 bold">Contact Phone Number</label>
                <Input placeholder="your number" value={formData?.phoneNumber} name="phoneNumber" id="phoneNumber" allowClear onChange={onChange} />
                {error?.phoneNumber && <span>{error?.phoneNumber}</span>}
              </div>
              <div className="flex justify-between ">
                <Button  className="bg-white text-black " size="large" onClick={()=>setCurrentStep(prev=>prev-1)}>
            Back
          </Button>
          <Button  className="bg-black text-white"  size="large" onClick={handleSubmit}>
            submit
          </Button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
