"use client"
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        document.title = "404 not-found";
    });
    return (
        <>
            <div className='h-[90vh] flex flex-col w-full gap-10 justify-center items-center'>
                <h1 className='text-10xl font-bold drop-shadow-lg'>404</h1>
                <p className='text-3xl font-light -mt-20'>Could not find your desire page</p>
                <p className='text-3xl font-semibold'>Thank You 💔</p>
                <button className='py-3 px-10 bg-socialBlue text-white rounded-md shadow-xl active:translate-y-1 transition-all ease-in-out duration-200' onClick={() => {
                    setTimeout(() => {
                        router.back();
                    }, 500)
                }}>Take me to the previous page</button>
            </div>
        </>
    )
}

export default NotFoundPage