import Image from "next/image";


export default function About(){
    return (
        <main className="flex flex-col w-full gap-12"> 
        <div className="flex flex-col lg:flex-row bg-red-100 w-[60%] h-auto rounded-xl p-20 justify-between relative">
          
         <div className="flex flex-col gap-8 w-[50%] ">
           <span className="text-4xl font-bold">Why would love Fresher Kolkata</span>
            <ul className="flex flex-col gap-2 list-disc">
                <li>Language is not a barier</li>
                <li>Batch strength is max 10 students</li>
                <li>Instructors have minimum of 3 years of experiences</li>
                <li>Freshers kolkata is not an institute, its a professional training center</li>

            </ul>
         </div>
         <div>
           <div className="text-3xl font-bold">Projects</div>
           <div className="bg-gray-400  absolute top-[30%] h-auto right-[-10%] p-8 flex-grow w-[40%] ">
            <span>inside the div</span>
           </div>
         </div>

        </div>

        <div className="flex border-b flex-col lg:flex-row items-center w-full justify-center pb-4 gap-8  p-2">
          <Image src="/Hanuman_sir.png" alt="no image" width={400} height={2000} className="rounded-full"/>

          <div className="flex flex-col gap-4">
            <span className="text-3xl font-bold">Hanuman Mishra, coorporate Trainer Fresher Kolkata</span>
            <span className="text-xl ">Learn from the industry experts. Work on live projects. Avil internship facility after the graduation.</span>
            <div className="flex flex-row gap-4 w-full justify-center items-center">
              <div className="bg-red-600 p-2 rounded-md">
              <button className="text-white">Join us to make a bright career</button>
              </div>
              <div className="bg-lime-900 rounded-md p-2">
              <button className="text-white" >Discover</button>
              </div>

            </div>
          </div>

        </div>

     
        </main>
    )
}   