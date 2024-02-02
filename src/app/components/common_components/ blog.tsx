import { FaArrowRightLong } from "react-icons/fa6";
import blog from "../../common/metadata/blog";
import Image from "next/image";

export default function Blog(){
    return (
        <main className="flex flex-col pl-2 border-b xl:pb-12 md:pb-12 lg:pb-12 2xl:pb-12 sm:pb-4 pb-4 sm:pl-2 md:pl-2  xl:pl-32 xl:pr-32 lg:pr-32  lg:pl-32 gap-8">
            {/* heading */}
        

            <div className="flex xl:flex-row lg:flex-row md:flex-row 2xl:flex-row sm:flex-col flex-col gap-4 pr-4 xl:justify-between 2xl:justify-between lg:justify-between md:justify-between ">
                  <div className="flex flex-col gap-1">
                    <span className="text-black font-bold xl:text-3xl 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-xl text-xl">Our Blog</span>
                    <span className="xl:text-base lg:text-base md:text-base 2xl:text-base  text-xs">See how you can up your career status</span>
                  </div>
                  <div className="flex flex-row gap-4 xl:items-center md:items-center 2xl:items-center lg:items-center sm:justify-between justify-between">
                    <span>All Categories</span>
                    <FaArrowRightLong/>

                  </div>
                </div>

            {/* body */}
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3  lg:grid-cols-3 md:grid-cols-3 justify-between sm:grid-cols-2 grid-cols-2 xl:gap-8 2xl:gap-8 md:gap-8 lg:gap-8 sm:gap-4  gap-4 ">
                {
                    blog?.map((item)=>{
                        return (
                        <div key={item.id} className="flex flex-col gap-6 shadow-sm xl:w-[60%] lg:w-[60%] md:w-[60%] 2xl:w-[60%] sm:w-full w-full ">
                            <div className=" " >
                                <Image src={item.image} alt="no image" className="object-cover relative "  width={300} height={300}/>
                                </div>
                                <div className="flex flex-col gap-2 xl:p-4 lg:p-4 2xl:p-4 md:p-4 sm:p-1 p-1">
                                    <span className="2xl:text-base xl:text-base md:text-base lg:text-base sm:text-sm text-xs">{item.date}</span>
                                    <span className="xl:text-lg md:text-lg 2xl:text-lg lg:text-lg sm:text-xs text-[7px]  text-black font-medium">{item.blogHeading}</span>
                                    <span className="xl:text-sm 2xl:text-sm md:text-sm lg:text-sm sm:text-xs text-xs">{item.description}</span>
                                </div>
                        </div>
                        )
                    })
                }
            </div>
        </main>
    )
}