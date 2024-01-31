"use client"; 

import React from "react";


import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdStar } from "react-icons/md";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

    export default function DemoSlider({data}:{data:any[]}){


  return (
  
      <div className="w-full xl:ml-32 lg:ml-32 md:ml-32 ">
   
          <Swiper
            navigation
          
            autoplay={true}
            loop={true}
            breakpoints={{
              864: { slidesPerView: 2 },
             
              1350:{slidesPerView:3}
              }}
           
            modules={[ Autoplay,Navigation, Pagination]}
            className="items-center w-full"
            
          >
            
                            {data.map(( item ) => (

              <SwiperSlide key={item?.id}>
                <div className="border bg-white lg:w-[60%] md:w-[80%]  w-full">
                  <Image src={item.image} alt="no image" className="w-full object-fit" width={200} height={200} />
                  <div className="flex flex-col gap-2 xl:pl-12 2xl:pl-12 md:pl-12 lg:pl-12 sm:pl-4  pb-7 w-full">
                    <div>
                    <span className="text-gray-600 xl:text-sm lg:text-sm md:text-sm sm:text-xs text-xs">{item.services}</span>
                    
                    </div>
                    <span className="xl:text-base md:text-base lg:text-base 2xl:text-base sm:text-sm text-xs font-medium">{item.description}</span>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="flex flex-row gap-1 items-center">
                      <MdStar color="yellow" />
                      <span className="font-medium 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs text-xs">{item.ratings}</span>
                      </div>
                      <span className="text-gray-600 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs text-xs">({item.reviews} reviews)</span>
                    </div>

                  </div>
                  </div> 
             
              </SwiperSlide>
            ))}
         

          </Swiper>
      
      </div>
  
  );
};


