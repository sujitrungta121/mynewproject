


export default function Demo(){
    return (
        <main className="bg-gradient-to-r  from-black to-transparent h-[40rem] ">
             {/* <div className="m-auto text-white justify-center items-center pl-[20rem] pt-[20rem]">
            <span className="text-4xl ">Hello world</span>
           </div> */}

<div className="flex flex-row flex-wrap gap-4">
            {
                bodyData?.subItems?.map((item)=>{
                    return(
                        <div className="flex flex-row xl:gap-4 lg:gap-4 md:gap-4 sm:gap-2 gap-2 items-center">
                            <item.icon className="w-3 h-3 2xl:w-5 2xl:h-5 xl:w-5 xl:h-5 lg:w-5 lg:h-5 md:w-5 md:h-5 sm:w-3 sm:h-3" color="white"/>
                          <span className="2xl:text-base xl:text-base lg:text-base md:text-sm sm:text-xs text-xs text-white">{item.title} </span>
                        </div>
                    )
                })
            }
        </div>
           <img src="/header-images/companies.jpg" className=" w-[60%] h-[40rem] absolute top-0 right-0 opacity-30"/>
         
        </main>
    )
}