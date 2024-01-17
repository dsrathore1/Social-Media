"use client"

import React from 'react';
import ProfilePic from "../Assets/profilePic.jpg";
import Image from "next/image";


const FriendList = () => {
    return (
        <div className='flex justify-between mt-8 items-center border-b-2 border-gray-100 pb-3'>
            <div className='flex justify-start w-full items-center gap-5 '>
                <Image className='h-12 w-12 object-cover rounded-full' alt='#' src={ProfilePic} width={50} height={50} />
                <p className='text-lg flex flex-col justify-center items-start'>
                    <span className='font-bold'>John Doe</span>
                    <span className='text-gray-600 text-base'>5 mutual friends</span>
                </p>
            </div>
            <button className='flex w-32 justify-center items-center py-2 rounded-full bg-socialBlue text-white shadow-md active:translate-y-1 transition-all ease-in-out duration-200' onClick={() => { window.alert("Clicked Profile") }}>See Profile</button>
        </div>
    )
}

export default FriendList;