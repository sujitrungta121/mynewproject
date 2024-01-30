import { FaArrowRightLong } from "react-icons/fa6";
import blog from "../../common/metadata/blog";
import Image from "next/image";

export default function Blog(){
    return (
        <main className="flex flex-col pl-6  pb-12 sm:pl-2 md:pl-2  xl:pl-32 xl:pr-32 lg:pr-32  lg:pl-32 gap-8">
            {/* heading */}
        

            <div className="flex xl:flex-row lg:flex-row md:flex-row 2xl:flex-row sm:flex-col flex-col gap-4  justify-between">
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
            <div className="flex  flex-row flex-wrap gap-8 ">
                {
                    blog?.map((item)=>{
                        return (
                        <div key={item.id} className="flex flex-col gap-6 shadow-sm ">
                            <div className="object-cover w-full" >
                                <img src={item.image} alt="no image" style={{objectFit:"cover"}}/>
                                </div>
                                <div className="flex flex-col gap-2 p-4">
                                    <span>{item.date}</span>
                                    <span className="text-lg text-black font-medium">{item.blogHeading}</span>
                                    <span className="text-sm">{item.description}</span>
                                </div>
                        </div>
                        )
                    })
                }
            </div>
        </main>
    )
}