"use client"

import React, { useEffect, useState } from 'react'

const Extra = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        await fetch("http://localhost:4000", {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.data);
            });
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className='h-[90vh] w-full flex flex-col justify-center items-center text-center]'>
            <h1>Hello World</h1>
            {data.map((res, index) => {
                return (
                    <p key={index}>
                        Name :- {res.name}
                        <br />
                        Email :- {res.email}
                    </p>
                )
            })}
        </div>
    )
}

export default Extra