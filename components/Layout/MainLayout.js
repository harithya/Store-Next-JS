import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function MainLayout(props) {
    return (
        <div>
            <Navbar />
            <div className='xl:px-48 px-5'>
                {props.children}
            </div>
            <div className='py-5 border-t flex justify-center  right-0 left-0 bottom-0'>
                <label className='text-center text-gray-500 text-sm'>2019 Copyright Store. All Rights Reserved.</label>
            </div>
        </div>
    )
}
