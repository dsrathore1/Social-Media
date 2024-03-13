"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdMood } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import copy from "clipboard-copy";

import ProfilePic from "../Assets/profilePic.jpg";

const Share = () => {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const [location, setLocation] = useState();

  useEffect(() => {
    const successRes = async ({ coords }) => {
      setLat(await coords.latitude);
      setLon(await coords.longitude);
    };
    window.navigator.geolocation.getCurrentPosition(successRes, () =>
      console.log("Found some error")
    );
  }, []);

  const getGeo = async () => {
    await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${process.env.NEXT_PUBLIC_TOKEN}`
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.results[0].formatted);
        setLocation(result.results[0].formatted);
      })
      .catch((error) => console.log("error", error));

    copy(location);
    window.alert("Copied Successfully!!, Now, press CTRL+V to text area");
  };

  return (
    <div className="shadow-md bg-white p-2 w-full rounded-md">
      <div className="flex justify-start items-center p-2 gap-5">
        <Image
          alt="profilePic"
          src={ProfilePic}
          height={100}
          width={100}
          className="rounded-full w-16 h-14 object-cover"
          priority={true}
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
          <button className="flex justify-center items-center text-lg font-normal gap-2 hover:text-yellow-400 transition-all ease-in-out duration-200 cursor-pointer">
            <MdMood className="font-thin text-3xl" /> Mood
          </button>
          <button
            onClick={getGeo}
            className="flex justify-center items-center text-lg font-normal gap-2 transition-all ease-in-out duration-200 cursor-pointer hover:text-red-400"
          >
            <GrLocation className="font-medium text-3xl" /> Location
          </button>
        </div>
        <button className="bg-socialBlue text-white rounded-md px-8 hover:opacity-80 cursor-default active:translate-y-1 transition-all duration-200 ease-in-out py-2 text-lg mr-3">
          Share
        </button>
      </div>
    </div>
  );
};

export default Share;
