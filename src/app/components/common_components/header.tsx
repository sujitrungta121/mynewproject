import Image from "next/image";
import aminities from "../../common/metadata/aminities"
import { useRouter } from "next/navigation";

export default function Header({setModalOpen,bodyData,click}:{click:Boolean,setModalOpen:React.Dispatch<React.SetStateAction<boolean>>,bodyData:any}) {
  
  const router=useRouter()
  
  return (
  




<main className=" relative h-[30rem]  z-0">
<div className="flex flex-col gap-4 lg:pl-4 xl:pl-20 2xl:pl-20 2xl:w-[100%] bannr-content-bg relative xl:w-[100%] h-full lg:w-[100%] md:w-[50%] sm:w-full w-full sm:p-8 z-10 pb-10 pl-4 justify-center  ">
<div className="flex flex-col gap-0.5 w-fit">
<span className="2xl:text-3xl xl:text-3xl  lg:text-3xl md:text-xl sm:text-xl text-base text-white font-bold">
  {bodyData?.title}
</span>
<span className="2xl:text-base xl:text-base lg:text-sm text-xs md:text-sm sm:text-xs text-white">
  {bodyData?.desc}
</span>
</div>

        <div className="flex xl:flex-row 2xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-4 ">
      { bodyData?.button1 &&  <div className="bg-emerald-900  rounded-lg  items-center justify-center  xl:p-4 lg:p-4 h-fit 2xl:p-4 md:p-4 sm:p-2 p-2  xl:w-fit lg:w-fit 2xl:w-fit md:w-fit hover:cursor-pointer " onClick={() => {
  setModalOpen(true);
  const button1Text = bodyData?. button1Content?.toLowerCase();
    if (click  && button1Text && button1Text.toLowerCase().slice(0,7)==="contact") {
    router.push("/contact-page");
  }
}}> 
                <span className='text-center font-medium text-white xl:text-base lg:text-base 2xl:text-base sm:text-xs text-xs md:text-sm'>{bodyData?.button1Content}</span>
             </div>}
            { bodyData?.call &&  <div className="bg-emerald-900 rounded-lg items-center justify-center xl:p-4 lg:p-4 h-fit 2xl:p-4 md:p-4 sm:p-2 p-2 xl:w-fit lg:w-fit 2xl:w-fit md:w-fit hover:cursor-pointer" onClick={()=>{const button1Text = bodyData?. button1Content?.toLowerCase();
    if (click  && button1Text && button1Text.toLowerCase().slice(0,7)==="contact") {
    router.push("/contact-page");
  }}}>
   <a href="tel:9038877129" className="text-center font-medium text-white xl:text-base lg:text-base 2xl:text-base sm:text-xs text-xs md:text-sm">
  {bodyData?.button2Content}
  </a>
 </div>}

     </div>
</div>
<Image src={bodyData?.image} alt="no image" className=" w-[100%] h-[100%] object-cover absolute top-0 right-0"  width={100} height={100}/>

</main>      
  );
}

