import Banner from '@/app/Components/Banner'
import FriendList from '@/app/Components/FriendList'
import React from 'react'

const Friends = () => {
    return (
        <div className='flex flex-col w-full gap-10'>
            <Banner />
            <div className='bg-white h-full w-full rounded-xl p-5'>
                <h1 className='text-2xl uppercase font-bold border-b-2 py-2 text-gray-300'>Friends</h1>
                <div className='my-7'>
                    <FriendList />
                    <FriendList />
                    <FriendList />
                    <FriendList />
                    <FriendList />
                    <FriendList />
                    <FriendList />
                    <FriendList />
                </div>
            </div>
        </div>
    )
}

export default Friends