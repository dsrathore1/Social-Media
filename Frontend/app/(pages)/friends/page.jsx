import Banner from '@/app/Components/Banner'
import React from 'react'

const Friends = () => {
    return (
        <div className='flex flex-col w-full gap-10'>
            <Banner />
            <div className='bg-white h-full w-full rounded-xl p-5'>
                <h1 className='text-2xl uppercase'>Friends</h1>
            </div>
        </div>
    )
}

export default Friends