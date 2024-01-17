import Banner from '@/app/Components/Banner'
import Post from '@/app/Components/Post'
import React from 'react'

const UserPosts = () => {
  return (
    <div className='flex flex-col w-full'>
      <Banner />
      <div className='flex flex-col py-5 bg-white w-full my-5 px-10'>
      <h1 className='text-2xl uppercase font-bold border-b-2 py-2 text-gray-300'>Your Posts</h1>
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default UserPosts