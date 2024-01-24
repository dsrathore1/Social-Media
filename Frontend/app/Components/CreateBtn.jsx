"use client"
import { FaQuidditch } from "react-icons/fa"
export default function CreateBtn() {
    return (
        <div className="fixed bottom-10 left-60 h-16 w-16 bg-socialBlue rounded-full flex justify-center items-center shadow-lg shadow-gray-400 cursor-pointer hover:bg-blue-400 duration-200 ease-in-out transition-all">
            <FaQuidditch className="text-white text-3xl" />
        </div>
    );
}