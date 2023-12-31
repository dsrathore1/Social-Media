"use client";

import Image from "next/image";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdMood } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import ProfilePic from "../Assets/profilePic.jpg";

const Share = () => {
  return (
    <div className="shadow-md bg-white p-2 w-full rounded-md">
      <div className="flex justify-start items-center p-2 gap-5">
        <Image
          alt="profilePic"
          src={ProfilePic}
          height={100}
          width={100}
          className="rounded-full w-16 h-16 object-cover"
        />
        <textarea
          className="w-full px-3 py-2 text-lg border-2 rounded-md"
          placeholder="Whats on your mind, David?"
          rows={2}
        />
      </div>
      <div className="flex justify-between items-center text-gray-400">
        <div className="mx-4 gap-8 flex justify-center items-center">
          <span className="flex justify-center items-center text-lg font-normal gap-2  transition-all ease-in-out duration-200 cursor-pointer hover:text-gray-600">
            <BsPerson className="font-medium text-3xl" /> People
          </span>
          <span className="flex justify-center items-center text-lg font-normal gap-2 hover:text-yellow-400 transition-all ease-in-out duration-200 cursor-pointer">
            <MdMood className="font-thin text-3xl" /> Mood
          </span>
          <span className="flex justify-center items-center text-lg font-normal gap-2 transition-all ease-in-out duration-200 cursor-pointer hover:text-red-400">
            <GrLocation className="font-medium text-3xl" /> Location
          </span>
        </div>
        <button className="bg-socialBlue text-white rounded-md px-8 hover:opacity-80 cursor-default active:translate-y-1 transition-all duration-200 ease-in-out py-2 text-lg mr-3">
          Share
        </button>
      </div>
    </div>
  );
};

export default Share;
