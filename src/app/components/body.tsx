import Image from "next/image";
import jobSeek from "../../../public/jobSeekerTraining.png";
import summerTraining from "../../../public/summerTraining.png";
import coorporateTraining from "../../../public/coorporateTraining.png";
import About from "./about";
import SwiperComponent from "../common/swiperComponent";
import DemoSlider from "../common/swiperComponent";
import angular_logo from "../../../public/angular_image.png";
import Testimonals from "./Testimonals";
import servicesData from "../common/metadata/servicesData";
import Category from "./category";


export default function Body(){


    return (
    <main className="pt-0 flex flex-col gap-8 w-full lg:w-full">
   

      <div className="bg-emerald-900 p-[8rem] flex flex-col gap-16 ">
        <div className="gap-2 flex flex-col">
        <h2 className="text-white font-bold text-3xl ">Need Something Done?</h2>
        <p className="text-white text-xs">Most viewed and all-time top-selling services</p>
        </div>

        <div className="flex gap-2">
          {
            servicesData?.map((item)=>{
              return (
                <div className="flex flex-col gap-2 items-center ">
                  <Image src={item.icon} alt="no image" width={50} height={50}/>
                  <span className="text-xl text-white">{item.title}</span>
                  <p className="text-white"> {item.Description}</p>
                </div>
              )
            })
          }
        </div>

      </div>
      <div>  
      
      {/* <DemoSlider data={data}/> */}
      </div>

    <Category/>
     
      <div className="flex-grow">

      <About />
      </div>
      <Testimonals/>
     
    </main>
    )
}