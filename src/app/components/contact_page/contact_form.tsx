import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import submitContact from '@/app/contact-page/submitForm';
import Modal from "react-modal"
import { IoClose } from 'react-icons/io5';
import { IoIosClose } from 'react-icons/io';
import Login from "../loginForm"

interface ErrorType {
  [key: string]: string; 
}

interface form {
  name: string;
  email: string; 
  message: string;
}

const initialform: form = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = ({ heading, description }: { heading: string; description: string; }) => {
  const [form, setform] = useState<form>(initialform);
  const [error, setError] = useState<ErrorType>({});
  const [submitting, setSubmitting] = useState(false);
  const [openModal,setOpenModal]=useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  

  const handleSubmit =  async(e:any,formData:any) => {
    console.log(formData,"formData")
    e.preventDefault();

    const newErrors: Partial<form> = {};
    Object.keys(form).forEach((key) => {
      if (!form[key as keyof form] && key !== 'message') {
        newErrors[key as keyof form] = `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty`;
      }
      if (e.target.name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(e.target.value);
        console.log(isValidEmail)
        if (!isValidEmail) {
          setError({
            ...error,
            email: 'Invalid email format'
          });
        } else {
          setError({
            ...error,
            email: ''
          });
        }
      }
    });
    setError(newErrors);
    console.log(newErrors,"new errors")

    if (Object.keys(newErrors).length === 0) {
      
        try {
          const response = await submitContact(formData);
              console.log(response);
              if (response.status === "200") {
                console.log("form submitted")
            
                setform(initialform);
           
             setOpenModal(true)
               
        }
      } 
      catch (error) {
        console.error('Error submitting form:', error);
        
      } 
      } 
    }


  return (
    <main className="bg-white shadow-md sm:shadow-lg rounded-md mb-16 2xl:absolute xl:absolute lg:absolute md:top-[7%] md:right-[0%] lg:top-[8%] lg:right-0 2xl:right-[10%] 2xl:top-[12%] xl:top-[8%] xl:right-[2%] p-8">
     
     <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        contentLabel="Example Modal"
        className="top-[50%] z-auto left-1/2  translate-x-[-50%] -translate-y-1/2 relative shadow-md px-8 py-16 xl:w-[25%] lg:w-[30%] md:w-[30%] border-0 sm:w-full w-full bg-white"
      >
        <div className="absolute right-[2%] top-[2%]  p-2 bg-white shadow-md rounded-full hover:cursor-pointer border-green-500 border-2" onClick={() => {  setOpenModal(false) }}>
          <IoIosClose size={20}  />
        </div>
        <div className="w-full flex justify-center m-auto">
        <span  className="text-center font-bold text-2xl text-green-900">Your Response has been recorded</span>
        </div>
      </Modal>
      <div>
        <div className="flex flex-col gap-2">
          {heading && <h2 className="text-xl font-bold">{heading}</h2>}
          {description && <p className="text-gray-500">{description}</p>}
        </div>

        <div className="p-4">
          <form method="POST" className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`px-4 py-2 rounded-md border ${error.name ? 'border-red-500 border-2' : 'border-gray-300'} focus:outline-none`}
                    required
                  />
         
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`px-4 py-2 rounded-md border ${error.email ? 'border-red-500 border-2' : 'border-gray-300'} focus:outline-none`}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={12}
                  value={form.message}
                  onChange={handleChange}
                  className={`px-4 py-2 rounded-md border ${error.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-full w-full py-4 flex flex-row gap-2 rounded-md bg-green-600 text-white font-bold hover:bg-blue-400 focus:ring-2 focus:ring-offset-2"
                disabled={submitting}
               onClick={(e)=>handleSubmit(e,form)}
                >
                {submitting ? 'Submitting...' : 'Submit'}
                <MdArrowOutward color="white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
