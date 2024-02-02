
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Header(){

  const popularSearches=["Designer","Developer","Web","IOS","PHP","Senior","Engineer"]
  const length=popularSearches.length;
    return(
        <main className="flex flex-row relative">

 <div className="flex w-full sm:w-full md:w-full lg:w-[70%] xl:w-[60%]  bg-amber-50 lg:bg-white xl:bg-white sm:bg-amber-50 p-4 md:pl-0 xl:items-center 2xl:items-center lg:items-center md:items-center">
             <div className="flex flex-col gap-4 md:pl-4 sm:w-full  pl-0  items-start  justify-center xl:items-start lg:items-start md:items-start sm:items-start xl:pt-32 lg:pt-32 sm:pt-2 pt-2 lg:pl-20">
      <div className="flex flex-col gap-2">
      <span className="text-emerald-900 font-bold xl:text-4xl lg:text-4xl text-base  md:text-4xl    lg:items-center ">With talented <strong className="text-green-500 xl:text-4xl lg:text-4xl md:text-4xl  text-base">Freelancers</strong> Do more work</span>
      <span className="text-xs sm:text-xs lg:text-base xl:text-base md:text-base ">Millions of people use freeio.com to turn their ideas into reality.</span>
      </div>
      <div className="border border-black flex bg-white lg:flex-row md:flex-row xl:flex-row sm:flex-col flex-col lg:p-2 xl:p-2  xl:items-center lg:items-center justify-between md:w-[70%] lg:w-[70%] xl:w-[70%]  sm:w-full w-full p-2">
        <div className="flex items-center gap-4">
      <FaSearch/>
      
        <input type="text" placeholder="what are you looking for" 
  className="focus:outline-none bg-transparent w-full text-black border-none p-2 "
  />

        </div>
        <div className="bg-emerald-900 xl:p-4 lg:p-4 p-2 rounded-md items-center justify-center">
          <button className="text-white">Search</button>
        </div>
      </div>
      <div className="sm:flex flex flex-row flex-wrap md:flex md:flex-row lg:flex-row xl:flex-row gap-2">
  <span className="text-sm">Popular Searches:</span>
  <div className="flex flex-row flex-wrap w-full gap-1">
    {popularSearches?.map((item, index) => {
      return (
        <div key={index} className="hover:cursor-pointer">
          <span className="hover:text-green-900 hover:font-semibold md:text-sm xl:text-sm lg:text-sm sm:text-xs text-xs">
            {item}
            {!(length === index + 1) && <span>,</span>}
          </span>
        </div>
      );
    })}
  </div>
</div>

     </div>
     </div>

     <div className="flex-1 xl:bg-amber-50 md:bg-amber-50 lg:bg-amber-50  relative xl:h-[38rem] lg:h-[38rem]">

      <div className="hidden p-0 absolute bottom-0 z-0 lg:left-[-10%]  md:left-[10%] sm:hidden lg:block xl:block">
  <Image src="/side_banner.png" alt="no image" width={500} height={900} />
</div>
     </div>
        </main>
    )
}



