import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className='bg-blue-300 mb-10'>
            <img src='/img/banner.jpg' className='w-full h-auto object-contain' />
        </div>
    )
}
