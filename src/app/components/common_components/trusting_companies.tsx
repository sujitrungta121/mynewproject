import trustingCompanies from "@/app/common/metadata/trustingCompanies";



export default function TrustingCompanies({border}:{border:boolean}){
    return(
        <main>
              <div className={`flex flex-col gap-4 pb-8 ${border && "border-b"} mt-32 mb-8` }>
  <span className="text-center">Trusted By world's best</span>
  <div className="flex flex-row gap-20 xl:justify-center lg:justify-center md:justify-center sm:pl-10 flex-wrap   w-full">
  {
  trustingCompanies?.map((item, index) => {
    const IconComponent = item.icon; 
    return (
      <div key={index}>
    
        <IconComponent size={80}/>
      </div>
    );
  })
}
  </div>
    </div>
        </main>
    )
}