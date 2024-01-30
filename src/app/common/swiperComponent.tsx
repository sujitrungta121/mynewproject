"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdStar } from "react-icons/md";

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
  
      <div className="w-full xl:ml-32 lg:ml-32 md:ml-32 sm:ml-28 ml-20 ">
   
          <Swiper
            navigation
          
            autoplay={true}
            loop={true}
            breakpoints={{
              864: { slidesPerView: 2 },
             
              1350:{slidesPerView:3}
              }}
           
            modules={[ Autoplay,Navigation, Pagination]}
            className="items-center"
            
          >
            
                            {data.map(( item ) => (

              <SwiperSlide key={item?.id}>
                <div className="border bg-white lg:w-[60%] md:w-[80%] sm:w-[80%] w-full">
                  <img src={item.image} alt="no image" className="w-full object-fit"/>
                  <div className="flex flex-col gap-2 pl-12 pb-7">
                    <div>
                    <span className="text-gray-600 text-sm">{item.services}</span>
                    
                    </div>
                    <span className="text-base font-medium">{item.description}</span>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="flex flex-row gap-1 items-center">
                      <MdStar color="yellow" />
                      <span className="font-medium text-sm">{item.ratings}</span>
                      </div>
                      <span className="text-gray-600 text-sm">({item.reviews} reviews)</span>
                    </div>

                  </div>
                  </div> 
             
              </SwiperSlide>
            ))}
         

          </Swiper>
      
      </div>
  
  );
};


