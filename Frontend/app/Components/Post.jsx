import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

import ProfilePic from "../Assets/profilePic.jpg";
import PostPhoto from "../Assets/post-photo.jpg";

const Post = () => {
  return (
    <div className="flex h-[100vh] flex-col justify-between bg-white mt-5 rounded-md shadow-lg shadow-gray-300 p-5">
      <div className="w-full">
        <div className="flex">
          <Image
            src={ProfilePic}
            alt="profilePic"
            height={100}
            width={100}
            className="h-16 w-16 object-cover rounded-full"
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
            <BsThreeDotsVertical className="text-gray-500 text-xl mt-2" />
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
        </div>
      </div>
    </div>
  );
};

export default Post;
