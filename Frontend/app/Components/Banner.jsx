"use client";
import React from "react";
import Image from "next/image";
import BannerImg from "../Assets/Banner_Image.jpg";
import ProfilePic from "../Assets/profilePic.jpg";
import { BsFilePost } from "react-icons/bs";
import { BiGroup, BiPhotoAlbum } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Banner = () => {
  const pathname = usePathname();
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-evenly bg-white rounded-xl shadow-md shadow-gray-200">
          <Image
            className="w-full h-[30vh] object-fill rounded-ss-xl rounded-se-xl"
            alt="Banner_Image"
            src={BannerImg}
            height={200}
            width={400}
          />
          <div className="relative">
            <Image
              className="absolute -top-20 left-6 rounded-full h-40 w-40 object-cover"
              src={ProfilePic}
              alt="ProfilePic"
              width={200}
              height={200}
            />
            <div className="ml-[12rem] mt-2">
              <h1 className="text-3xl font-bold">John Doe</h1>
              <p className="text-gray-300 font-light">Stockholm, Sweden</p>
            </div>
          </div>
          <ul className="flex w-full mt-12 py-3 justify-around items-center">
            <Link
              href="/friends/posts"
              className={`${
                pathname === "/friends/posts"
                  ? "flex gap-2 justify-center items-center text-socialBlue"
                  : "flex gap-2 justify-center items-center"
              }`}
            >
              <BsFilePost />
              Post
            </Link>
            <Link
              href="/friends/about"
              className={`${
                pathname === "/friends/about"
                  ? "flex gap-2 justify-center items-center text-socialBlue"
                  : "flex gap-2 justify-center items-center"
              }`}            >
              <span className="text-xl">ℹ</span> About
            </Link>
            <Link
              href="/friends"
              className={`${
                pathname === "/friends"
                  ? "flex gap-2 justify-center items-center text-socialBlue"
                  : "flex gap-2 justify-center items-center"
              }`}            >
              <BiGroup />
              Friends
            </Link>
            <Link
              href="/friends/photos"
              className={`${
                pathname === "/friends/photos"
                  ? "flex gap-2 justify-center items-center text-socialBlue"
                  : "flex gap-2 justify-center items-center"
              }`}            >
              <BiPhotoAlbum />
              Photos
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Banner;
