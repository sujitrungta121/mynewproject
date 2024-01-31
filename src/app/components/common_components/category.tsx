"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import courses from "../../common/metadata/courses"

export default function Category() {
  const [hoverId, setHoverId] = useState(-1);
  return (
    <main className="flex flex-col gap-16 2xl:pl-32  lg:pl-32 lg:pr-32 pt-8 md:pl-0 p-2 md:pr-0 ">
      <div className="flex xl:flex-row lg:flex-row md:flex-row 2xl:flex-row sm:flex-col flex-col gap-4  justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-black font-bold xl:text-3xl 2xl:text-3xl lg:text-3xl md:text-3xl sm:text-xl text-xl">
            Our Courses
          </span>
          <span className="xl:text-base lg:text-base md:text-base 2xl:text-base  text-xs">
            Get upskilled your self by following our skills
          </span>
        </div>
        <div className="flex flex-row gap-4 xl:items-center md:items-center 2xl:items-center lg:items-center sm:justify-between justify-between">
          <span>All Categories</span>
          <FaArrowRightLong />
        </div>
      </div>
      <div className="  w-full gap-8 grid xl:grid-cols-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 ">
        {courses?.map((item) => (
          <div
            key={item.id}
            className=" flex xl:flex-row md:flex-row lg:flex-row 2xl:flex-row sm:flex-col flex-col gap-4 xl:items-center  md:items-center justify-center lg:items-center 2xl:items-center  mb-8 "
            onMouseEnter={() => setHoverId(item.id)}
            onMouseLeave={() => setHoverId(-1)}
          >
            <Image
              src={item.image}
              alt="not image"
              width={100}
              height={80}
              className=" "
            />
            <div className="flex flex-col ">
              <span
                className={`w-full  font-600 flex hover:cursor-pointer items-center transition-colors ${
                  hoverId === item.id ? "text-green-700" : "text-black"
                }`}
              >
                {item.title}
              </span>
              <span className="text-slate-600">
                {item.numOfCourses} courses
              </span>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </main>
  );
}
