import aminities from "../../common/metadata/aminities"

export default function Header({setModalOpen,bodyData}:{setModalOpen:React.Dispatch<React.SetStateAction<boolean>>,bodyData:any}) {
  return (
  




<main className=" relative h-[30rem]  ">
<div className="flex flex-col gap-4 lg:pl-4 xl:pl-20 2xl:pl-20 2xl:w-[100%] bannr-content-bg relative xl:w-[100%] h-full lg:w-[100%] md:w-[50%] sm:w-full w-full sm:p-8 z-20 pb-10 pl-4 justify-center  ">
<div className="flex flex-col gap-0.5 w-fit">
<span className="2xl:text-3xl xl:text-3xl  lg:text-3xl md:text-xl sm:text-xl text-base text-white font-bold">
  {bodyData?.title}
</span>
<span className="2xl:text-base xl:text-base lg:text-sm text-xs md:text-sm sm:text-xs text-white">
  {bodyData?.desc}
</span>
</div>

        <div className="flex xl:flex-row 2xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-4 ">
      { bodyData?.button1 &&  <div className="bg-emerald-900  rounded-lg  items-center justify-center  xl:p-4 lg:p-4 h-fit 2xl:p-4 md:p-4 sm:p-2 p-2  xl:w-fit lg:w-fit 2xl:w-fit md:w-fit hover:cursor-pointer " onClick={()=>setModalOpen(true)}> 
                <span className='text-center font-medium text-white xl:text-base lg:text-base 2xl:text-base sm:text-xs text-xs md:text-sm'>{bodyData?.button1Content}</span>
             </div>}
            { bodyData?.call &&  <div className="bg-emerald-900 rounded-lg items-center justify-center xl:p-4 lg:p-4 h-fit 2xl:p-4 md:p-4 sm:p-2 p-2 xl:w-fit lg:w-fit 2xl:w-fit md:w-fit hover:cursor-pointer">
   <a href="tel:9038877129" className="text-center font-medium text-white xl:text-base lg:text-base 2xl:text-base sm:text-xs text-xs md:text-sm">
  {bodyData?.button2Content}
  </a>
 </div>}

     </div>
</div>
<img src="/header-images/companies.jpg" className=" w-[100%] h-[100%] object-cover absolute top-0 right-0"/>

</main>      
  );
}


//     <main className="flex xl:flex-row lg:flex-row 2xl:flex-row md:flex-row sm:flex-col flex-col relative  pl-4 justify-center bg-gradient-to-r from-black to-transparent">
//     {/* <main className="flex xl:flex-row lg:flex-row 2xl:flex-row md:flex-row sm:flex-col flex-col   pl-4 justify-center bg-gradient-to-r from-black to-transparent"> */}
  
//     <div className="absolute top-0 left-0 right-0 h-full "></div>

{/* <div className="flex flex-col gap-4 lg:pl-4 xl:pl-20 2xl:pl-20 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full sm:p-8  pb-10 pl-4 justify-center  ">
<div className="flex flex-col gap-0.5 w-fit">
<span className="2xl:text-3xl xl:text-3xl  lg:text-3xl md:text-xl sm:text-xl text-base text-white font-bold">
  {bodyData?.title}
</span>
<span className="2xl:text-base xl:text-base lg:text-sm text-xs md:text-sm sm:text-xs text-white">
  {bodyData?.desc}
</span>
</div>

//         <div className="flex xl:flex-row 2xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-4 ">
//       { bodyData?.button1 &&  <div className="bg-emerald-900  rounded-lg  items-center justify-center  xl:p-4 lg:p-4 h-fit 2xl:p-4 md:p-4 sm:p-2 p-2  xl:w-fit lg:w-fit 2xl:w-fit md:w-fit hover:cursor-pointer " onClick={()=>setModalOpen(true)}> 
//                 <span className='text-center font-medium text-white xl:text-base lg:text-base 2xl:text-base sm:text-xs text-xs md:text-sm'>{bodyData?.button1Content}</span>
//             </div>}
//            { bodyData?.call &&  <div className="bg-emerald-900 rounded-lg items-center justify-center xl:p-4 lg:p-4 h-fit 2xl:p-4 md:p-4 sm:p-2 p-2 xl:w-fit lg:w-fit 2xl:w-fit md:w-fit hover:cursor-pointer">
//   <a href="tel:9038877129" className="text-center font-medium text-white xl:text-base lg:text-base 2xl:text-base sm:text-xs text-xs md:text-sm">
//   {bodyData?.button2Content}
//   </a>
// </div>}

     </div>
</div> */}
    
//       <div className="w-full lg:w-[50%] xl:w-[50%] md:w-[50%] sm:w-full  bg-transparent opacity-60">
//       {/* <div className="w-full  bg-transparent opacity-80"> */}

//        <img src={bodyData?.image} alt="no image"  className="w-full"/>
//       </div>
//     </main>