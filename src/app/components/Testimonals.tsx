import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";


export default function Testimonals(){
    return (
        <main className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center">
                <span className="text-2xl">Over 12189+ proffessionals trained </span>
                <span className="text-2xl">Here is  what they have to say about us</span>
                

            </div>
           
            <div className="flex flex-col items-center justify-center w-[50%] gap-8">
                <FaQuoteLeft color="green" size={40} />
                <span className="items-center text-2xl font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum cupiditate ratione provident adipisci reiciendis, similique mollitia odio blanditiis cum nesciunt. Voluptas labore inventore ex temporibus minima, repellat incidunt unde cupiditate est nemo! Harum, voluptatibus?</span>
                <span>-Somany Roy</span> 
                <div className="flex flex-row gap-8 justify-between">
                <Image src="/review.png" alt="no image" width={100} height={100}/>
                <Image src="/review.png" alt="no image" width={100} height={100}/>

                <Image src="/review.png" alt="no image" width={100} height={100}/>

            </div>
            </div>
        </main>
    )
}