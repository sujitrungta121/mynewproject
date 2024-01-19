'use client'

import { FaArrowRightLong } from "react-icons/fa6";
import categoriesData from "../common/metadata/catogoriesData";
import Image from "next/image";
import { useState } from "react";

export default function Category(){
    const [hoverId,setHoverId]=useState(-1);
    return (
        <main className="flex flex-col gap-16 pl-32 pr-32 pt-8">
            {/* <div> */}
                {/* heading */}
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-black font-bold text-3xl">Browse Talent by Category</span>
                    <span>Get some Inspirations from 1800+ skills</span>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <span>All Categories</span>
                    <FaArrowRightLong/>

                  </div>
                </div>
                <div className="flex flex-wrap  w-full">
  {categoriesData?.map((item) => (
    <div key={item.id} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 flex gap-4 items-center mb-8 " onMouseEnter={()=>setHoverId(item.id)} onMouseLeave={()=>setHoverId(-1)}>
      <Image src={item.image} alt="not image" width={200} height={80} />
      <div className="flex flex-col ">
        <span  className={`w-full font-bold sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 flex gap-4 items-center mb-8 transition-colors ${
            hoverId === item.id ? 'text-blue-500' : 'text-black'}`}>{item.title}</span>
        <span>{item.numService} services</span>
      </div>
    </div>
  ))}
</div>

                <div>

                </div>
            {/* </div> */}
        </main>
    )
}