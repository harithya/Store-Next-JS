import React from 'react'

export default function Button(props) {
    return (
        <button className={`py-2 px-6 hover:bg-green-600 bg-green-500 text-white rounded-md ${props.className}`}>
            {props.children}
        </button>
    )
}
