import Banner from "@/app/Components/Banner";
import Photos from "@/app/Components/Photos";
import React from "react";

const UserPhotos = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <Banner />
      <div className="bg-white h-full w-full rounded-xl p-5">
        <h1 className="text-2xl uppercase font-bold border-b-2 py-2 text-gray-300">
          Saved Photos
        </h1>
        <div className="flex flex-wrap justify-evenly gap-10 my-5">
          <Photos />
          <Photos />
          <Photos />
          <Photos />
        </div>
      </div>
    </div>
  );
};

export default UserPhotos;
