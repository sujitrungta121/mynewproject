import aminities from "../../common/metadata/aminities"

export default function Header({setModalOpen,bodyData}:{setModalOpen:React.Dispatch<React.SetStateAction<boolean>>,bodyData:any}) {
  return (
    <main className="flex xl:flex-row lg:flex-row 2xl:flex-row md:flex-row sm:flex-col flex-col ">
      <div className="flex flex-col gap-4 lg:pl-4 xl:pl-20 2xl:pl-20 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full w-full sm:p-8 bg-amber-50 pb-10 pl-4 justify-center">
        <div className="flex flex-col gap-0.5 w-fit">
        <span className="2xl:text-3xl xl:text-3xl  lg:text-3xl md:text-xl sm:text-xl text-base  font-bold">
          {bodyData?.title}
        </span>
        <span className="2xl:text-base xl:text-base lg:text-sm text-xs md:text-sm sm:text-xs">
          {bodyData?.desc}
        </span>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
            {
                bodyData?.subItems?.map((item)=>{
                    return(
                        <div className="flex flex-row xl:gap-4 lg:gap-4 md:gap-4 sm:gap-2 gap-2 items-center">
                            <item.icon className="w-3 h-3 2xl:w-5 2xl:h-5 xl:w-5 xl:h-5 lg:w-5 lg:h-5 md:w-5 md:h-5 sm:w-3 sm:h-3"/>
                          <span className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs text-xs">{item.title} </span>
                        </div>
                    )
                })
            }
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
      <div className="w-50% lg:w-[50%] xl:w-[50%] md:w-[50%] sm:w-full h-25rem">
       <img src={bodyData?.image} alt="no image"  className="w-full"/>
      </div>
    </main>
  );
}
