"use client";

import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { RiGroupLine, RiLogoutCircleLine } from "react-icons/ri";
import { GrNotification } from "react-icons/gr";
import { BsArchive } from "react-icons/bs";

export default function Navigation() {
  return (
    <div className="shadow-md shadow-gray-300 rounded-md w-[30vw] bg-fixed md:static h-[50vh] bg-white">
      <h1 className="text-center font-medium text-2xl pt-3 text-gray-300">
        Navigation
      </h1>
      <div className="flex gap-5 flex-col items-start justify-between py-4 px-4 transition-all ease-in-out duration-300">
        <Link
          className="flex justify-start gap-4 items-center font-normal text-sm text-white w-full bg-socialBlue py-3 px-2 scale-125 rounded-md shadow-md hover:bg-opacity-70 transition-all ease-in-out duration-300"
          href="#"
        >
          <AiOutlineHome className="text-xl" />
          Home
        </Link>
        <Link
          className="flex justify-start gap-4 items-center font-normal text-md text-black w-full py-2 px-2 rounded-md hover:bg-socialBlue hover:opacity-85 hover:text-white hover:scale-125 transition-all ease-in-out duration-300"
          href="#"
        >
          <RiGroupLine className="text-xl" />
          Friends
        </Link>
        <Link
          className="flex justify-start gap-4 items-center font-normal text-md text-black w-full py-2 px-2 rounded-md"
          href="#"
        >
          <GrNotification className="text-xl" />
          Notification
        </Link>
        <Link
          className="flex justify-start gap-4 items-center font-normal text-md text-black w-full py-2 px-2 rounded-md"
          href="#"
        >
          <BsArchive className="text-xl" />
          Saved Post
        </Link>
        <Link
          className="flex justify-start gap-4 items-center font-normal text-md text-black w-full py-2 px-2 rounded-md"
          href="#"
        >
          <RiLogoutCircleLine className="text-xl" />
          Logout
        </Link>
      </div>
    </div>
  );
}
