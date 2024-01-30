"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import DropDown from "./dropDown";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import navData from "./metadata/navData";
import Modal from "react-modal";
import { useRouter } from "next/navigation";
import CallForm from "./callForm";
import { IoIosClose } from "react-icons/io";


export default function Navbar({
  setMobileNav,
  backgroundColor,
}: {
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundColor: String;
  



}) {
  console.log(setMobileNav, "setmovile");
  const [openMenu, setOpenMenu] = useState(false);
  const [openLogin,setOpenLogin]=useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [openModal, setModalOpen] = useState(false);
  const [openSignup,setOpenSignup]=useState(false)
  const router = useRouter();

  const openMobileNav = () => {
    setMobileNav(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <main className="flex flex-row w-full p-0 md:justify-between sm:justify-between justify-between items-center sm:p-4 md:p-0  sm:border-b border-b lg:border-none ">
      <Modal
        isOpen={openModal}
        onRequestClose={openModal}
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
      <div
        className="flex w-full sm:w-full md:w-full lg:w-[70%] xl:w-[60%]  bg-white
         
           p-4 md:pl-0 "
        style={{ backgroundColor }}
      >
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-12 pl-4">
            <Image
              src="/logo.png"
              alt="no image"
              width={30}
              height={50}
              className="hover:cursor-pointer"
              onClick={() => router.push("/")}
            />
            <div className=" flex-row   gap-4 sm:hidden lg:flex hidden">
              {navData?.map((item) => {
                console.log(hoveredItem, "inside the map");
                return (
                  <div
                    key={item.id}
                    className="flex flex-row relative items-center  hover:cursor-pointer hover:bg-emerald-900 hover:p-2 rounded-md hover:transition hover:delay-150 hover:ease-in-out"
                    onMouseEnter={() => {
                      setHoveredItem(item.id);
                    }}
                    onMouseLeave={() => {
                      setHoveredItem(null);
                    }}
                    onClick={() => {
                      item.page && router.push(item.page);
                    }}
                  >
                    <span
                      className={`font-medium text-sm hover:text-white ${
                        backgroundColor === "black"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {item.title}
                    </span>
                    {item.sideArrow && (
                      <MdArrowDropDown
                        color={backgroundColor === "black" ? "white" : " black"}
                      />
                    )}

                    {hoveredItem === item.id && item.sideArrow && (
                      <DropDown
                        dropDownItem={item?.content}
                        hoveredItemId={hoveredItem}
                        setHoveredIndex={setHoveredItem}
                        index={item.id}
                        setDropDown={setOpenMenu}
                        position="top"
                        topValue={35}
                        rightValue={15}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex-1 xl:bg-amber-50 md:bg-amber-50 lg:bg-amber-50  sm:bg-white gap-4"
        style={{ backgroundColor }}
      >
        <div className="flex flex-col  ">
          <div className="hidden gap-8 p-4 items-center lg:flex md:hidden sm:hidden ">
            <FaSearch />
          

            <div onClick={() =>{setModalOpen(true); setOpenLogin(true)}}>
              <span
                className={`${
                  backgroundColor === "black" ? "text-white" : "text-black"
                } hover:cursor-pointer`}
              >
                Login
              </span>
            </div>
            <div className="bg-emerald-900 rounded-md p-2 items-center justify-center hover:cursor-pointer" onClick={()=>{setModalOpen(true);setOpenSignup(true)}}>
              <span className="text-white">Signup</span>
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center  lg:hidden sm:flex relative h-full p-[1.71rem]">
            <GiHamburgerMenu
              onClick={openMobileNav}
              color={backgroundColor === "black" ? "white" : "black"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
