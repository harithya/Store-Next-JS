import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function MainLayout(props) {
    return (
        <div className='xl:px-52 pb-28 px-5'>
            <Navbar />
            <div>
                {props.children}
            </div>
        </div>
    )
}
