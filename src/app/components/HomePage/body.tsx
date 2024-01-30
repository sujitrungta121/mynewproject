import Image from "next/image";

import About from "../common_components/about";

import Testimonals from "../common_components/Testimonals";
import servicesData from "../../common/metadata/servicesData";
import Category from "../common_components/category";
import TrendingServices from "./trending";
import Blog from "../common_components/ blog";
import TrustingCompanies from "../common_components/trusting_companies";

export default function Body(){


    return (
    <main className="pt-0 flex flex-col  gap-8 w-full lg:w-full">
   

      <div className="bg-emerald-900 xl:p-[8rem] lg:p-[8rem] md:pt-[4rem] md:pb-[4rem] md:pl-[1rem] sm:pl-[1rem] pl-[1rem] md:pr-0 pt-3 pb-3 flex flex-col xl:gap-16 lg:gap-16 md:gap-16 2xl:gap-16 sm:gap-4 gap-8  ">
        <div className="gap-2 flex flex-col">
        <h2 className="text-white font-bold xl:text-3xl 2xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl ">Need Something Done?</h2>
        <p className="text-white text-xs">Most viewed and all-time top-selling services</p>
        </div>

        <div className="flex gap-8 sm:flex-wrap md:flex-wrap md:gap-6 items-center  lg:flex-wrap xl:flex-wrap flex-wrap w-full sm:w-full lg:w-full xl:w-full md:w-full">
          {
            servicesData?.map((item)=>{
              return (
                <div className="flex     xl:w-[20%] lg:w-[20%] w-[40%] flex-col gap-2"key={item.id}>
                  <Image src={item.icon} alt="no image" width={50} height={50}/>
                  <div className="w-1/2">
                  <span className="  inline xl:text-xl 2xl:text-xl lg:text-xl sm:text-base text-sm md:text-base text-white">{item.title}</span>
                  </div>
                  <div className="">
                  <p className="text-white lg:text-sm xl:text-sm 2xl:text-sm md:text-sm sm:text-xs text-xs"> {item.Description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
      <div>  
      
  
      </div>

    <Category/>
  
     
      <div className="flex-grow">

      <About open={true}/>
      </div>
      <Testimonals/>
      <TrendingServices/>

      <Blog/>

  

  <TrustingCompanies/>

    <div className="bg-amber-50 flex flex-col xl:justify-center lg:justify-center xl:items-center lg:items-center md:items-center lg:p-24 md:p-24 sm:p-4 p-4  xl:p-24 gap-4">
      <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-emerald-900 font-bold xl:text-3xl lg:text-3xl sm:text-xl text-xl">Subscribe our NewsLetter &</span>
      <span className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </span>
      </div>

      <div className="flex xl:flex-row lg:flex-row md:flex-row 2xl:flex-row flex-col pt-4 gap-2 bg-white border justify-between xl:p-5 lg:p-5 md:p-5 sm:p-2 p-1 xl:w-[40%] lg:w-[40%] md:w-[40%] w-full">
        <input type="email" placeholder="your email address" className="focus:outline-none border-none xl:text-base lg:text-base md:text-base w-[50%] text-xs"/>
        <div className="bg-emerald-900 xl:p-2 lg:p-2 md:p-2 sm:p-1 p-1 rounded-md">
          <span className="text-white xl:font-semibold lg:font-semibold md:font-semibold text-sm">send</span>
        </div>
      </div>
    </div>
     
    </main>
    )
}