'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdArrowOutward } from "react-icons/md";


interface ResponsePageProps {
  data: {
    code: string;
    image: string;
    message: string;
    description: string;
    
  };
}

const ResponsePage: React.FC<ResponsePageProps> = ({ data }) => {

    const router =useRouter();
  const code = data?.code || "";

  
  const lastDigit = code[code.length - 1];

  const codeWithoutLastDigit = code.slice(0, -1);

  return (
    <main className="flex  2xl:flex-row  xl:flex-row lg:flex-row gap-24 md:flex-row sm:flex-col flex-col mb-8 mt-8 xl:justify-center lg:justify-center 2xl:justify-center xl:p-0 lg:p-0 md:p-0 sm:p-0 p-4 items-center">
      
      <div className="h-[20%] w-[50%]">
      <Image src={data?.image} alt="" width={500} height={500} />
      </div>

      <div className="flex flex-col gap-4   items-center xl:items-start lg:items-start md:items-start sm:items-center">
        {codeWithoutLastDigit && (
          <span className="xl:text-[12rem] lg:text-[12rem] md:text-[5rem] sm:text-[12rem] text-[6rem] font-bold">
            {codeWithoutLastDigit}
            <span className="text-green-600">{lastDigit}</span>
          </span>
        )}
        <div className="flex flex-col ">
          <span className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-base font-bold">{data?.message}</span>
          <span>{data?.description}</span>
        </div>
        <div className="bg-green-600 hover:cursor-pointer p-4 xl:w-[40%] lg:w-[30%] md:w-[30%] sm:w-full w-full flex flex-row gap-2 items-center justify-center" onClick={()=>router.push("/")}>
          <span>Back to Home</span>
          <MdArrowOutward color="white" />
        </div>
      </div>
    </main>
  );
};

export default ResponsePage;
