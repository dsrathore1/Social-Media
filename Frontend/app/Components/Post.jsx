import React from "react";
import Image from "next/image";
import { BsImage, BsThreeDotsVertical } from "react-icons/bs";

import ProfilePic from "../Assets/profilePic.jpg";
import PostPhoto from "../Assets/post-photo.jpg";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";

const Post = () => {
  return (
    <div className="flex h-full flex-col justify-between bg-white mt-5 rounded-md shadow-lg shadow-gray-300 p-5">
      <div className="w-full">
        <div className="flex">
          <Image
            src={ProfilePic}
            alt="profilePic"
            height={100}
            width={100}
            className="h-14 w-16 object-cover rounded-full"
          />
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col justify-start px-3 items-start ">
              <p>
                <span className="font-semibold">David Doe</span> shared a
                <span className="text-blue-500"> album</span>
              </p>
              <span className="text-gray-500 font-normal text-sm">
                2 hours ago
              </span>
            </div>
            <button className="relative">
              <BsThreeDotsVertical className="hover-threeDot text-gray-500 text-xl mt-2" />
              {/* Dropdown start */}
              <div className="dropdown hidden absolute -left-32 bg-white divide-y divide-gray-100 rounded-md shadow-xl border border-gray-100 w-[10rem] dark:bg-gray-700">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              {/* dropdown end  */}
            </button>
          </div>
        </div>
        <div className="mt-3">
          <div className="mt-2 font-light text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, cum cupiditate deleniti ducimus et eveniet ex excepturi
            fuga magnam, maiores nam pariatur quibusdam, recusandae
            reprehenderit sapiente sed sint veniam? Beatae. cupiditate deleniti
            ducimus et eveniet ex excepturi fuga magnam, maiores nam pariatur
            quibusdam, recusandae reprehenderit sapiente sed sint veniam?
            Beatae.
          </div>
          <div className="w-full h-[70vh] mt-2">
            <Image
              className="h-full object-cover w-full rounded-lg"
              src={PostPhoto}
              alt="postPhoto"
              height={900}
              width={900}
            />
          </div>
          <div className="flex justify-start items-center my-5 gap-16">
            <span className="flex items-center gap-3 text-lg">
              <AiOutlineHeart className="text-3xl text-gray-500" />
              42
            </span>
            <span className="flex items-center gap-3 text-lg">
              <BiMessage className="text-3xl text-gray-500" />
              11
            </span>
            <span className="flex items-center gap-3 text-lg">
              <AiOutlineShareAlt className="text-3xl text-gray-500" />5
            </span>
          </div>
          <div className="flex justify-start items-center gap-6">
            <Image
              className="rounded-full w-14 h-12 cursor-pointer object-cover"
              height={40}
              width={50}
              alt="profilePic"
              src={ProfilePic}
            />
            <input
              className="px-4 py-3 w-full border-2 rounded-full"
              placeholder="Leave your comment"
            />
            <BsImage className="text-4xl text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
