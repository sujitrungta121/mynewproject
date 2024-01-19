"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
import SliderButtons from "./SliderButtons";
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
  
      <div className="w-full ">
   
          <Swiper
            navigation
          
            autoplay={true}
            loop={true}
            breakpoints={{
                1084: { slidesPerView: 1 },
                
                1240: { slidesPerView: 3 },
              }}

            modules={[ Autoplay,Navigation, Pagination]}
            
          >
            
                            {data.map(( item ) => (

              <SwiperSlide key={item?.id}>
              
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center">
                    
                 <div className="flex flex-col gap-4 border border-gray-400 ">
                    <Image src={item?.image} alt="no image" width={400} height={200}/>
                    <span className="text-2xl font-bold ">{item?.title}</span>
                 </div>
                   
                  </div>
                </div>
              </SwiperSlide>
            ))}
         

          </Swiper>
      
      </div>
  
  );
};


