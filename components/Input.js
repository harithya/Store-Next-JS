import React from 'react'

export default function Input(props) {
    return (
        <div className='mb-4'>
            <span className='block mb-2 text-sm'>{props.label}</span>
            <input type={"text"} className="py-2 bg-slate-100 focus:bg-white w-full rounded-md px-5 border" />
        </div>
    )
}
