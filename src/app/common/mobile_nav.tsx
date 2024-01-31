"use client";

import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoIosClose, IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import CallForm from "./callForm";
import Modal from "react-modal";

export default function MobileNav({
  data,
  setMobileNav,
  width,
}: {
  data: any[];
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  width:String
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openInnerMenu, setOpenInnerMenu] = useState<number | null>(null);
  const [openModal, setModalOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const router = useRouter();

  const handleClose = () => {
    setMobileNav(false);
    setOpenMenu(false);
    if (openInnerMenu) setOpenInnerMenu(null);
    document.body.style.overflow = "";
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
    <main className={`bg-white  sm:w-full md:${width?`w-[${width}]`:"w-[70%]"}  w-[100%]  h-[200rem] flex flex-col gap-4  absolute right-0 top-0 bottom-0  overflow-y-auto`}>
      <Modal
        isOpen={openModal}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Example Modal"
        className="top-[50%] left-1/2 translate-x-[-50%] -translate-y-1/2   relative shadow-md   px-8 py-16 xl:w-[25%] lg:w-[30%] md:w-[30%] border-0 sm:w-full w-full bg-white"
      >
        <div
          className="absolute right-[2%] top-[2%]  p-2 bg-white shadow-md rounded-full hover:cursor-pointer border-green-500 border-2"
          onClick={() => {
            setOpenLogin(false);
            setModalOpen(false);
          }}
        >
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
      <div className="flex flex-row justify-between border-b p-4">
        <span>Menu</span>
        <IoMdClose onClick={handleClose} color="black" />
      </div>

      <div className="flex flex-col gap-4 border-b p-4">
        {data.map((item) => {
          return (
            <div
              className="flex items-center justify-between"
              key={item.id}
              onClick={() => {
                setOpenInnerMenu(item.id);
                setOpenMenu(true);
                item?.page && router.push(item.page);
              }}
            >
              <span className="text-black">{item.title}</span>
              {item.sideArrow && <FaAngleRight color="black" />}
              {openMenu && openInnerMenu === item.id && item?.content && (
                <div className="w-full">
                <MobileNav data={item?.content} setMobileNav={setOpenMenu} width="100%"/>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col p-4 gap-4">
        <span
          onClick={() => {
            setModalOpen(true);
            setOpenLogin(true);
          }}
        >
          Login
        </span>
        <span
          onClick={() => {
            setModalOpen(true);
            setOpenSignup(true);
          }}
        >
          Register
        </span>
      </div>
    </main>
  );
}
