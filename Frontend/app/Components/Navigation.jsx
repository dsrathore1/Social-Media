"use client";

import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { RiGroupLine, RiLogoutCircleLine } from "react-icons/ri";
import { GrNotification } from "react-icons/gr";
import { BsArchive } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="shadow-md shadow-gray-300 rounded-md w-[30vw] h-[50vh] bg-white">
      <h1 className="text-center font-medium text-2xl pt-3 text-gray-300">
        Navigation
      </h1>
      <div className="flex gap-5 flex-col items-start justify-between py-4 px-4 transition-all ease-in-out duration-500">
        <Link
          className={`${
            pathname === "/Home"
              ? "flex justify-start gap-4 items-center font-normal text-sm text-white w-full bg-socialBlue py-3 px-2 scale-125 rounded-md shadow-md hover:bg-opacity-70 transition-all ease-in-out duration-500"
              : "flex justify-start gap-4 items-center font-normal text-md text-black w-full py-2 px-2 rounded-md hover:bg-socialBlue hover:opacity-85 hover:text-white hover:scale-125 transition-all ease-in-out duration-500"
          }`}
          href="/Home"
        >
          <AiOutlineHome className="text-xl" />
          Home
        </Link>
        <Link
          className={`${
            pathname === "/friends"
              ? "flex justify-start gap-4 items-center font-normal text-sm text-white w-full bg-socialBlue py-3 px-2 scale-125 rounded-md shadow-md hover:bg-opacity-70 transition-all ease-in-out duration-500"
              : "flex justify-start gap-4 items-center font-normal text-md text-black w-full py-2 px-2 rounded-md hover:bg-socialBlue hover:opacity-85 hover:text-white hover:scale-125 transition-all ease-in-out duration-500"
          }`}
          href="/friends"
        >
          <RiGroupLine className="text-xl" />
          Friends
        </Link>
        <Link
          className={`${
            pathname === "/notifications"
              ? "flex justify-start gap-4 items-center font-normal text-sm text-white w-full bg-socialBlue py-3 px-2 scale-125 rounded-md shadow-md hover:bg-opacity-70 transition-all ease-in-out duration-500"
              : "flex justify-start gap-4 items-center font-normal text-md text-black w-full py-2 px-2 rounded-md hover:bg-socialBlue hover:opacity-85 hover:text-white hover:scale-125 transition-all ease-in-out duration-500"
          }`}
          href="/notifications
          "
        >
          <GrNotification className="text-xl" />
          Notification
        </Link>
        <Link
          className={`${
            pathname === "/savedPost"
              ? "flex justify-start gap-4 items-center font-normal text-sm text-white w-full bg-socialBlue py-3 px-2 scale-125 rounded-md shadow-md hover:bg-opacity-70 transition-all ease-in-out duration-500"
              : "flex justify-start gap-4 items-center font-normal text-md text-black w-full py-2 px-2 rounded-md hover:bg-socialBlue hover:opacity-85 hover:text-white hover:scale-125 transition-all ease-in-out duration-500"
          }`}
          href="/savedPost"
        >
          <BsArchive className="text-xl" />
          Saved Post
        </Link>
        <Link
          className={`${
            pathname === "/login"
              ? "flex justify-start gap-4 items-center font-normal text-sm text-white w-full bg-socialBlue py-3 px-2 scale-125 rounded-md shadow-md hover:bg-opacity-70 transition-all ease-in-out duration-500"
              : "flex justify-start gap-4 items-center font-normal text-md text-black w-full py-2 px-2 rounded-md hover:bg-socialBlue hover:opacity-85 hover:text-white hover:scale-125 transition-all ease-in-out duration-500"
          }`}
          href="/login"
        >
          <RiLogoutCircleLine className="text-xl" />
          Logout
        </Link>
      </div>
    </div>
  );
}
