import React from 'react'
import BreadItem from './BreadItem'

export default function Breadcrumb() {
    return (
        <ul className='flex space-x-8 mb-4 py-5'>
            <BreadItem>Home</BreadItem>
            <BreadItem>/</BreadItem>
            <BreadItem active>Product Detail</BreadItem>
        </ul>
    )
}
