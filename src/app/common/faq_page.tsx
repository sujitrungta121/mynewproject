'use client'

import { useState } from "react";
import faqData from "../common/metadata/faq_data"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
export default function FAQ({backgroundColor} : {backgroundColor:String}){

    const [openFaq,setOpenFaq]=useState(false)
    const [openIndex,setOpenIndex]=useState<number | null>(null)

    return (
        <main className="flex flex-col items-center gap-16 pb-32 sm:p-4 p-4 lg:p-0 xl:p-0 2xl:p-0 md:p-0 mb-16 mt-16">
    
            <div className="flex flex-col items-center gap-2">
               <strong className="text-3xl">Frequently Asked Questions</strong>
               <span>Lorem ipsum dolor sit amet, consectetur.</span>
                </div> 


             <div className="flex flex-col gap-8">
             {faqData?.map((item) => (
  <div
    key={item.id}
    className={`flex flex-col  w-full   hover:cursor-pointer ${openFaq && openIndex === item.id && "bg-lime-50 p-8"}`}


    onClick={() => {
      if (openIndex === null) {
        setOpenFaq(true);
        setOpenIndex(item.id);
      }
      else if(openIndex  && openIndex!==item.id){
        setOpenFaq(true);
        setOpenIndex(item.id)
      }

      else if(openIndex  && openIndex===item.id){
        setOpenFaq(false);
        setOpenIndex(null)
      }
    
     
    }}
  >
    <div className="flex flex-row xl:justify-between xl:gap-32 lg:gap-32 md:gap-32 lg:justify-between md:justify-between sm:justify-between justify-between gap-4">
      <span className="xl:text-xl 2xl:text-xl lg:text-xl md:text-xl sm:text-sm text-sm font-medium sm:w-[70%] w-[70%] xl:w-full lg:w-full md:w-full 2xl:w-full">{item.question}</span>
      {openFaq && openIndex === item.id ? (
      <FaMinus/>
    ) : (
      <FaPlus />
    )}
    </div>
   
    {openFaq && openIndex === item.id && <span>{item.answer}</span>}
  </div>
))}

</div>

        </main>
    )
}