


import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import DropDown from "./menu";
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
  const [openLogin, setOpenLogin] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [openModal, setModalOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [inputOpen, setInputOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (inputOpen) {
        const inputContainer = document.getElementById("input-container");

        if (inputContainer && !inputContainer.contains(event.target)) {
          setInputOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputOpen]);

  const openMobileNav = () => {
    setMobileNav(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleLoginClick = () => {
    setOpenLogin(false);
  };

  const handleSignUp = () => {
    setOpenSignup(false);
  };

  return (
    <main className="flex flex-row w-full p-0 md:justify-between sm:justify-between justify-between items-center sm:p-4 md:p-0 sm:border-b border-b lg:border-none">
      <Modal
        isOpen={openModal}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Example Modal"
        className="top-[50%] z-auto left-1/2 translate-x-[-50%] -translate-y-1/2 relative shadow-md px-8 py-16 xl:w-[25%] lg:w-[30%] md:w-[30%] border-0 sm:w-full w-full bg-white"
      >
        <div className="absolute right-[2%] top-[2%]  p-2 bg-white shadow-md rounded-full hover:cursor-pointer border-green-500 border-2" onClick={() => { setOpenSignup(false); setOpenLogin(false); setModalOpen(false) }}>
          <IoIosClose size={20} />
        </div>
        {openLogin && (
          <CallForm
            modalClosing={handleModalClose}
            closeLogin={handleLoginClick}
            closeSignUp={handleSignUp}
            fieldsToShow={["name", "email"]}
            heading="Login"
          />
        )}
        {openSignup && (
          <CallForm
            modalClosing={handleModalClose}
            closeLogin={handleLoginClick}
            closeSignUp={handleSignUp}
            fieldsToShow={["name", "email", "password"]}
            heading="Signup"
          />
        )}
      </Modal>
      <div className="flex w-full sm:w-full md:w-full lg:w-[70%] xl:w-[60%]  bg-white p-4 md:pl-0 " style={{ backgroundColor: backgroundColor && `${backgroundColor}` }}>
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-12 pl-4">
            <Image src="/logo.png" alt="no image" width={30} height={50} className="hover:cursor-pointer" onClick={() => router.push("/")} />
            <div className=" flex-row   gap-4 sm:hidden lg:flex hidden">
              {navData?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-row relative items-center  hover:cursor-pointer hover:bg-emerald-900 hover:p-2 rounded-md hover:transition hover:delay-100 hover:ease-in-out"
                    onMouseEnter={() => {
                      setHoveredItem(item.id);
                    }}
                    onMouseLeave={() => {
                      setHoveredItem(null);
                    }}
                    onClick={() => {
                      item?.content && setHoveredItem(item.id)
                      item.page && router.push(item.page);
                    }}
                  >
                    <span className={`font-medium text-sm hover:text-white ${backgroundColor ? "text-white" : "text-black"}`}>
                      {item.title}
                    </span>
                    {item.sideArrow && (
                      <MdArrowDropDown color={backgroundColor ? "white" : " black"} />
                    )}
                    {hoveredItem === item.id && item.sideArrow && (
                      <DropDown dropDownItem={item?.content} bottomValue={0} position="top" topValue={35} rightValue={15} border={false} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 xl:bg-amber-50 md:bg-amber-50 lg:bg-amber-50  sm:bg-white gap-4" style={{ backgroundColor: backgroundColor && `${backgroundColor}` }}>
        <div className="flex flex-col  ">
          <div className="hidden gap-8 p-4 items-center lg:flex md:hidden sm:hidden ">
            {inputOpen ? (
              <div id="input-container" className="border-green flex flex-row justify-between bg-black items-center pl-1 pr-1" style={{ backgroundColor: backgroundColor && "white" }}>
                <input type="text" placeholder="search" className="focus:border-none focus:outline-none p-1 bg-black text-white " style={{ backgroundColor: backgroundColor && "white", color: backgroundColor && "black" }} />
                <FaSearch color={backgroundColor ? "black" : "white"} />
              </div>
            ) : (
              <FaSearch className="hover:cursor-pointer" color={backgroundColor ? "white" : "black"} onClick={() => setInputOpen(true)} />
            )}
            <div onClick={() => { setModalOpen(true); setOpenLogin(true) }}>
              <span className={`${backgroundColor ? "text-white" : "text-black"} hover:cursor-pointer`}>
                Login
              </span>
            </div>
            <div className="bg-emerald-900 rounded-md p-2 items-center justify-center hover:cursor-pointer" onClick={() => { setModalOpen(true); setOpenSignup(true) }}>
              <span className="text-white">Signup</span>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center  lg:hidden sm:flex relative h-full p-[1.71rem]">
            <GiHamburgerMenu onClick={openMobileNav} color={backgroundColor ? "white" : "black"} />
          </div>
        </div>
      </div>
    </main>
  );
}

