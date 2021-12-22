import Image from 'next/image'
import React from 'react'

export default function Categories(props) {
    return (
        <div className='bg-gray-100 flex rounded-md cursor-pointer hover:bg-gray-200 hover:scale-105 transition-transform justify-center flex-col py-8 '>
            <Image src={`/img/categories/${props.img}`} width={80} height={80} />
            <label className='text-center mt-4 xl:text-lg'>{props.title}</label>
        </div>
    )
}
