import React from 'react';
import UserPosts from './posts';
import UserAbout from './about';
import UserPhotos from './photos';
import NotFound from '../../../not-found';


const Route = ({ params }) => {
    return (
        <>
            {
                params.user === "posts" ? <UserPosts /> :
                    params.user === "about" ? <UserAbout /> : params.user === "photos" ? <UserPhotos /> : <NotFound/>

            }
        </>
    )
}

export default Route