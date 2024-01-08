import React from 'react';
import Image from "next/image";
import BannerImg from "../Assets/Banner_Image.jpg";

const Banner = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-evenly'>
                <Image className='w-full' alt='Banner_Image' src={BannerImg} height={200} width={400} />
                <div className=''>
                    Hello
                </div>
            </div>
        </>
    )
}

export default Banner