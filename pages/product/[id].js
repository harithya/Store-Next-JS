import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const ImageProduct = (props) => {
    return (
        <img
            src={props.src}
            className={`${(props.primary) ? 'h-[450px] w-full' : 'h-24 w-48 mb-5 hover:border-2 hover:scale-105 transition-transform hover:border-red-500'} cursor-pointer object-cover rounded-lg`} />)
}

export default function Product() {
    const image = [
        'https://store-html.buildwithangga.id/images/product-details-4.jpg',
        'https://store-html.buildwithangga.id/images/product-details-1.jpg',
        'https://store-html.buildwithangga.id/images/product-details-2.jpg',
        'https://store-html.buildwithangga.id/images/product-details-3.jpg'
    ]

    return (
        <div>
            <Breadcrumb />
            <div className='flex space-x-10 mb-10'>
                <div className='w-8/12'>
                    <ImageProduct src={image[0]} primary />
                </div>
                <div className='w-4/12'>
                    {image.map((val, key) => <ImageProduct src={val} key={key.toString()} />)}
                </div>
            </div>
        </div>
    )
}
