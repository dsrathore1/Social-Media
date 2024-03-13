import Notify from "@/app/Components/Notify";
import React from "react";

const Notifications = () => {
  return (
    <>
      <div className="flex flex-col gap-10 w-full bg-white p-5 rounded-lg">
        <h1 className="text-3xl text-gray-300 font-semibold">Notifications</h1>
        <div className="flex flex-col w-full gap-5">
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
        </div>
      </div>
    </>
  );
};

export default Notifications;
