'use client'

import { Span } from "next/dist/trace";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface ErrorType {
  [key: string]: String; 
}
interface FormData {
  name: string;
  email: string; 
  message: string;
 
}


const initialFormData: FormData = {
  name: "",
  email: "",

  message: "",
 
};

export default function ContactForm({heading,description}:{heading:String,description:String}) {

  const [formData, setFormData] = useState<FormData>(initialFormData);


  const [error, setError] = useState<ErrorType>({});




  const handleChange=(e:any)=>{
     setFormData({
      ...formData,[e.target.name]:e.target.value
     })
  }

  const handleFocus=(e:any)=>{
    const nameField=e.target.name;
    if(e.target.value==="" && error[nameField])e.target.style.borderColor="red";

    else e.target.style.borderColor="black";
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();

   
    const newErrors = {};
  }
  //   Object.keys(formData).forEach((key) => {
  //     if (!formData[key] && e.target.name!=="message") {
  //       newErrors[key] = `${
  //         key.charAt(0).toUpperCase() + key.slice(1)
  //       } cannot be empty`;
  //     }
  //   });
  //   setError(newErrors);

   
  //   if (Object.keys(newErrors).length === 0) {
  
  //     console.log("Form submitted:", formData);
  //   }
  // };

  const handleBlur=(e:any)=>{
    const nameField=e.target.name;
     if(e.target.value==="" && error[nameField])e.target.style.borderColor="red";
     e.target.style.borderColor="black"
  }
  return (
    <main className="bg-white shadow-md sm:shadow-lg  rounded-md  mb-16  2xl:absolute xl:absolute lg:absolute md:top-[7%] md:right-[0%] lg:top-[8%] lg:right-0 2xl:right-[10%] 2xl:top-[12%] xl:top-[8%] xl:right-[2%] p-8"
 
    >
      <div>
        <div className="flex flex-col gap-2">
        {heading && <h2 className="text-xl font-bold">{heading}</h2>}
            {description && <p className="text-gray-500">
             {description}
            </p>}
        </div>

       

<div className="p-4 ">
  
      <form
        action="/thankPage"
        method="POST"
        className="flex flex-col space-y-4  "
      >
        <div className="flex flex-col space-y-4 w-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                className="px-4 py-2  rounded-md border border-gray-300   focus:outline-none"
                required
              />
              {error.name && <span className="text-red-700">{error.name}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                className="px-4 py-2 rounded-md border border-gray-300   focus:outline-none"
                required
              />
              {error.email && <span className="text-red-700">{error.email}</span>}
            </div>
          </div>
        
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={12}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              className="px-4 py-2 rounded-md border border-gray-300   focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-full w-full py-4 flex flex-row gap-2 rounded-md bg-green-600 text-white font-bold hover:bg-blue-400 focus:ring-2 focus:ring-offset-2 "
           onClick={handleSubmit}
          >
            Submit
            <MdArrowOutward color="white"/>
          </button>
        </div>
      </form>
    </div>
      </div>
    </main>
  );
}


