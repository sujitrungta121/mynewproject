import popularCourses from "../../common/metadata/popularCourses"


export default function PopularCourses(){
    return(
        <main className="2xl:p-20 xl:p-20 lg:p-20 md:p-20 sm:p-4 p-4 flex flex-col gap-8 xl:items-center lg:items-center md:items-center w-full">
            <div className="flex flex-col xl:items-center lg:items-center 2xl:items-center md:items-center ">
                <span className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-xl text-base font-bold text-green-500">Popular Courses</span>
                <span className="xl:text-center 2xl:text-center md:text-center lg:text-center ">Browse our Courses to keep yourself updated</span>
            </div>

            <div className="flex flex-row flex-wrap xl:gap-4 2xl:gap-4 md:gap-4 lg:gap-4  xl:justify-around 2xl:justify-around lg:justify-around md:justify-around  w-full">
                {
                    popularCourses.map((item)=>{
                        return(
                           <div className="flex flex-col gap-2" key={item.id}>

                            <item.icon className="xl:h-full xl:w-full 2xl:w-full 2xl:h-full lg:w-full lg:h-full md:w-full md:h-full sm:w-[50%] w-[50%] h-[50%]" size={100} color={item.color} />
                            <span className="xl:text-xl 2xl:text-xl lg:text-xl md:text-xl sm:text-base text-sm xl:font-medium 2xl:font-medium lg:font-medium md:font-medium ">{item.title}</span>

                           </div>
                        )
                    })
                }
            </div>
        </main>
    )
}