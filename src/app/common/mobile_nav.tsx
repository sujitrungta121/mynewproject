'use client'

import { useState } from "react";
import { DiVim } from "react-icons/di";
import { FaAngleRight } from "react-icons/fa";
import { IoIosClose, IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import CallForm from "./callForm";
import Modal from "react-modal"

export default function MobileNav({data,setMobileNav}:{data:any[],setMobileNav:React.Dispatch<React.SetStateAction<boolean>>}){
    const [openMenu,setOpenMenu]=useState(false)
    const [openInnerMenu,setOpenInnerMenu]=useState<number | null>(null)
    const [openModal, setModalOpen] = useState(false);
    const [openSignup,setOpenSignup]=useState(false)
    const [openLogin,setOpenLogin]=useState(false)
    console.log(data,setMobileNav,"data setmovds")

    const router=useRouter();

    const handleClose = () => {
        setMobileNav(false);
        setOpenMenu(false)
        if(openInnerMenu)setOpenInnerMenu(null)
        document.body.style.overflow = ''; 
      };
    return (
    
        <main className="bg-white sm:w-[80] md:w-[70%] w-[100%]  h-[200rem] flex flex-col gap-4  absolute right-0 top-0 bottom-0 z-40 overflow-y-auto">

<Modal
        isOpen={openModal}
        onRequestClose={()=>setModalOpen(false)}
        contentLabel="Example Modal"
        className="top-[50%] left-1/2 translate-x-[-50%] -translate-y-1/2   relative shadow-md   px-8 py-16 xl:w-[25%] lg:w-[30%] md:w-[30%] border-0 sm:w-full w-full bg-white"
      >
       
         
          <div
            className="absolute right-[2%] top-[2%]  p-2 bg-white shadow-md rounded-full hover:cursor-pointer border-green-500 border-2"
            onClick={() =>{ setOpenLogin(false);setModalOpen(false)}}
          >
            <IoIosClose size={20} />
          </div>
      

          {openLogin && (   <CallForm
          setModalOpen={setModalOpen}
          setOpenLogin={setOpenLogin}
          setOpenSignUp={setOpenSignup}
          fieldsToShow={["name","email"]}
          heading="Login"        
        /> )} 
       
       
       
        
      
          {openSignup && (   <CallForm
          setModalOpen={setModalOpen}
          setOpenLogin={setOpenLogin}
          setOpenSignUp={setOpenSignup}
          fieldsToShow={["name","email","password"]}
          heading="Signup"        
        /> )}
      
      </Modal>
            <div className="flex flex-row justify-between border-b p-4" >
                <span>Menu</span>
<IoMdClose onClick={handleClose} color="black"/>
</div>

  {openMenu && openInnerMenu && <div className="bg-black">
     <span className="text-white">Back</span>
    </div>}
            <div className="flex flex-col gap-4 border-b p-4">
                {
                    data.map((item)=>{
                        console.log(item,"new item")
                        return (
                            <div  className="flex items-center justify-between" key={item.id} onClick={()=>{setOpenInnerMenu(item.id);setOpenMenu(true); item?.page && router.push(item.page)}}>
                                <span className="text-black">{item.title}</span>
                                 {item.sideArrow && <FaAngleRight color="black"/>}
                                 {setOpenMenu && openInnerMenu===item.id  && item?.content && <MobileNav data={item?.content} setMobileNav={setOpenMenu}/>}
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col p-4 gap-4">
                <span onClick={()=>{setModalOpen(true);setOpenLogin(true);}}>Login</span>
                <span onClick={()=>{setModalOpen(true);setOpenSignup(true);}}>Register</span>
            </div>
        </main>
    )
}