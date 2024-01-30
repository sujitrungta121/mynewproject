import Image from "next/image";
import aboutContent from "../../common/metadata/about_content";
import { CiCircleCheck } from "react-icons/ci";
import benefits from "../../common/metadata/benefits"
import companyData from "../../common/metadata/company_data";


export default function About({open,backgroundColor}:{open:boolean,backgroundColor:String}){
    return (
      <main className="border-b pb-20">
        <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col lg:w-[80%] xl:w-[80%] relative h-[50rem] xl:items-center  w-full md:w-full sm:w-full md:pl-0 sm:pl-0 bg-red-100 xl:pt-32 pt-8 pl-8 lg:pt-32 2xl:pt-32  xl:pl-44 pb-32" style={{backgroundColor}}> 

       <div className="flex flex-row sm:gap-16 xl:items-center lg:items-center  ">
        
        <div className="w-[80%] md:w-[60%] flex flex-col xl:gap-16 lg:gap-16 md:gap-4 sm:gap-8 gap-8 md:p-4 lg:p-16 xl:p-16 sm:pl-4 pl-2">
          <span className="font-bold xl:text-3xl lg:text-3xl text-base md:text-2xl sm:text-xl  ">A whole world of freelance talenet at your fingertips</span>
          <div className="flex flex-col gap-4 ">

            {
              aboutContent.map((item)=>{
                return(
                    <div key={item.id} className="flex flex-row gap-4">

                     <img src={item.image} className="xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-4 md:h-4 sm:w-4 sm:h-4 w-4 h-4 "/>
                      <div className="flex flex-col gap-2">
                        <span className='  xl:text-base lg:text-base md:text-base sm:text-sm text-xs '>{item.title}</span>
                        <span className="text-gray-600 text-xs xl:text-sm lg:text-sm md:text-sm sm:text-xs ">{item.description}</span>
                      </div>
                    </div>
                )
              })
            }
            
          </div>
        </div>

   

        <div className="absolute xl:bottom-[10%] xl:right-[-20%] mb-16   lg:mb-0 xl:mb-0 lg:right-[-20%] lg:top-[10%] top-[60%]  h-full md:right-[5%] md:top-[2%] xl:w-[60%] lg:w-[60%]  md:w-[50%] sm:top-[38%]   sm:mb-32 ">
          <img src="/header-images/girl_image.png"  className="md:w-[100%] relative" />
      
        </div>
        </div>   

   


            </div>

          <div className="flex flex-row gap-32 xl:pl-32 lg:pl-32 md:pl-32 sm:pl-4 pl-4 pt-20 flex-wrap xl:items-center xl:justify-center lg:items-center lg:justify-center 2xl:pr-32 xl:pr-32 lg:pr-32 md:pr-32 sm:pr-4 pr-4">
            {
              companyData?.map((item)=>{
                return(
                  <div key={item.id} className="flex flex-col gap-2 items-center justify-center">
                    <span className="font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-xl text-base">{item.amount}</span>
                    <span className="text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base">{item.title}</span>
                  </div>
                )
              })
            }
          </div>

     
        </main>
    )
}   