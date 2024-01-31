'use client'

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import reviewData from "../../common/metadata/reviewData"
import { useState } from "react";


export default function Testimonals(){

    const [clickedId,setClickedId]=useState(1)

   


    return (
        <main className="flex flex-col  items-center gap-8 pt-20 pb-20">
            <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">Testimonals</span>
                <span className="text-center">Interdum et malesuada fames ac ante ipsum</span>
                

            </div>
           
            

            <div className="flex flex-col  sm:w-full w-full md:w-full xl:w-[70%] lg:w-[70%] 2xl:w-[70%] items-center gap-8">
  <FaQuoteLeft color="green" size={40} />

  {reviewData.map((item) => (
    <div key={item.id} className="flex flex-col w-[80%]">
      <span  className="text-center  md:text-2xl lg:text-4xl xl:text-3xl 2xl:text-3xl text-xl sm:text-xl font-bold cursor-pointer">
        {clickedId === item.id && item.review}
      </span>
      </div>
 ))}

 <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-10 items-start w-full">

     { reviewData?.map((item)=>{
        return(
            <div key={item.id} className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-row border w-full p-4 items-center rounded-full hover:cursor-pointer" onClick={() => setClickedId(item.id)}>
            <Image  src={item.avatar} alt="no image" className="w-15 h-10"  width={40} height={70}/>
            <div className="flex flex-row">
            <div className="flex flex-col ml-2">
              <span className="font-medium text-base">{item.name}</span>
              <span className="text-xs">{item.designation}</span>
            </div>
            </div>
          </div>
        )
     })
      }
      </div>
    
 
</div>



        </main>
    )
}