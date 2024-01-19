
import { FaAngleRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function MobileNav({data,setMobileNav}:{data:any[],setMobileNav:React.Dispatch<React.SetStateAction<boolean>>}){
    return (
        //250rem
        <main className="bg-emerald-600 sm:w-[70%]  w-full h-[300rem] absolute right-0 top-0 bottom-0 z-10 overflow-y-auto">
            <div className="absolute top-0 right-0 p-4">
<IoMdClose onClick={()=>setMobileNav(false)} color="white"/>
</div>
            <div className="flex flex-col gap-4 p-20">
                {
                    data.map((item,index)=>{
                        console.log(item,"new item")
                        return (
                            <div  className="flex items-center justify-between" key={index}>
                                <span className="text-slate-50">{item}</span>
                                 <FaAngleRight color="white"/>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}