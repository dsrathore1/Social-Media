"use client";

export default function Trending({ heading }) {
  return (
    <div className="shadow-md shadow-gray-300 rounded-md w-[20vw] h-[55vh] bg-white mb-8">
      <h1 className="text-center font-medium text-2xl pt-3 text-gray-300">
        {heading}
      </h1>
    </div>
  );
}
