import React from "react";
import Image from "next/image";

const Photos = () => {
  return (
    <>
      <Image
        className="rounded-lg shadow-lg shadow-gray-200"
        src="https://images.unsplash.com/photo-1705311756049-d4720db623f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height={300}
        width={400}
        alt="#"
      />
    </>
  );
};

export default Photos;
