import React from 'react'

export default function Product({ name, price, img }) {
    return (
        <div className='hover:scale-105 transition-transform cursor-pointer'>
            <img src={img} className='w-full object-cover h-40 rounded-md' />
            <div className='mt-5'>
                <label className='text-lg block mb-1'>{name}</label>
                <span className='font-semibold text-red-500'>{price}</span>
            </div>
        </div>
    )
}
