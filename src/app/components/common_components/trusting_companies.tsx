import trustingCompanies from "@/app/common/metadata/trustingCompanies";



export default function TrustingCompanies({border}:{border:boolean}){
    return(
        <main>
              <div className={`flex flex-col gap-4 2xl:pb-8 xl:pb-8 md:pb-8 lg:pb-8 sm:pb-2 pb-2 ${border && "border-b"} 2xl:mt-32 xl:mt-32 lg:mt-32 md:mt-32 sm:mt-2 mt-2 2xl:mb-8 xl:mb-8 lg:mb-8 md:mb-8 sm:mb-2 mb-2` }>
  <span className="text-center">Trusted By world's best</span>
  <div className="flex flex-row xl:gap-20 2xl:gap-20 lg:gap-20 md:gap-20 sm:gap-8 gap-8 xl:justify-center lg:justify-center md:justify-center  sm:pl-10  pl-10 flex-wrap   w-full">
  {
  trustingCompanies?.map((item, index) => {
    const IconComponent = item.icon; 
    return (
      <div key={index} >
    
        <IconComponent size={80} className="w-[80%] h-[80%] 2xl:w-full 2xl:h-full xl:w-full xl:h-full lg:w-full lg:h-full md:w-full md:h-full sm:w-[80%] sm:h-[80%]"/>
      </div>
    );
  })
}
  </div>
    </div>
        </main>
    )
}