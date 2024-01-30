'use client'

import { FaArrowRightLong } from "react-icons/fa6";
import categoriesData from "../../common/metadata/catogoriesData";
import Image from "next/image";
import { useState } from "react";

export default function Category(){
    const [hoverId,setHoverId]=useState(-1);
    return (
        <main className="flex flex-col gap-16 lg:pl-32 lg:pr-32 pt-8 md:pl-0 sm:pl-2 pl-2 md:pr-0 pr-0">
       
                <div className="flex xl:flex-row lg:flex-row md:flex-row 2xl:flex-row sm:flex-col flex-col gap-4  justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-black font-bold xl:text-3xl 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-xl text-xl">Our Courses</span>
                    <span className="xl:text-base lg:text-base md:text-base 2xl:text-base  text-xs">Get upskilled your self by following our skills</span>
                  </div>
                  <div className="flex flex-row gap-4 xl:items-center md:items-center 2xl:items-center lg:items-center sm:justify-between justify-between">
                    <span>All Categories</span>
                    <FaArrowRightLong/>

                  </div>
                </div>
                <div className="flex flex-wrap gap-6 w-full">
  {categoriesData?.map((item) => (
    <div key={item.id} className="sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 flex xl:flex-row md:flex-row lg:flex-row 2xl:flex-row sm:flex-col flex-col gap-4 items-center mb-8 " onMouseEnter={()=>setHoverId(item.id)} onMouseLeave={()=>setHoverId(-1)}>
      <Image src={item.image} alt="not image" width={100} height={80} />
      <div className="flex flex-col ">
        <span  className={`w-full  font-600 flex hover:cursor-pointer items-center transition-colors ${
            hoverId === item.id ? 'text-blue-500' : 'text-black'}`}>{item.title}</span>
        <span className="text-slate-600">{item.numService} services</span>
      </div>
    </div>
  ))}
</div>

                <div>

                </div>
          
        </main>
    )
}