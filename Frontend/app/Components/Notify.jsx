"use client";

import React from "react";
import ProfilePic from "../Assets/profilePic.jpg";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Notify = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-100 pb-3">
      <div className="flex justify-start w-full items-center gap-5 ">
        <Image
          className="h-12 w-12 object-cover rounded-full"
          alt="#"
          src={ProfilePic}
          width={50}
          height={50}
        />
        <p className="text-lg  ">
          <span className="font-bold">John Doe </span>
          liked <span className="text-socialBlue">you post</span>
        </p>
      </div>

      <AiOutlineCloseCircle
        onClick={() => {
          window.alert("You clicked for cancel");
        }}
        className="text-gray-500 text-3xl cursor-pointer"
      />
    </div>
  );
};

export default Notify;
