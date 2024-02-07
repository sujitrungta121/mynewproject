"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdArrowRight } from "react-icons/md";

type DropDownProps = {
  dropDownItem: any;
  topValue: number;
  rightValue: number;
  position: string;
  border: boolean;
  bottomValue: number;
};

const DropDown: React.FC<DropDownProps> = ({
  dropDownItem,
  bottomValue,
  topValue,
  rightValue,
  position,
  border,
}) => {
  const [hoverItem, setHoverItem] = useState<number | null>(null);

  const router=useRouter()

  const getPositionStyle = () => {
    if (position === "top") {
      return { top: `${topValue}px`, right: `${rightValue}%` };
    } else if (position === "bottom") {
      return { bottom: `${bottomValue}px`, right: `${rightValue}px` };
    } else {
      return {};
    }
  }

  return (
    <div className={`bg-white shadow-md rounded flex flex-col visible absolute w-40 z-40 p-2 `}
       style={getPositionStyle()}>
     
    
      {dropDownItem?.map((item:any) => (
        <div
          key={item.id}
          className={`${
            border ? "border-b" : "border-none"
          } hover:bg-gray-600 hover:border-s-2 hover:border-s-lime-800 flex flex-row justify-between p-2 hover:color-white`}
          onMouseEnter={() => {
            setHoverItem(item.id);
      
          }}
          onMouseLeave={() => {
            setHoverItem(null);
          }}

          onClick={() => {
            
            item.page && router.push(item.page);
          }}
        >
          <span className="text-sm">{item.title}</span>
          {hoverItem === item.id && item?.content && (
            <DropDown
            topValue={0}
            border={false}
            bottomValue={0}
              rightValue={-96}
              position="top"
              dropDownItem={item?.content}
            />
          )}
          {item.sideArrow && <MdArrowRight />}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
