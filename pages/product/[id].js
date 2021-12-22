import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Button from '../../components/Button'

const ImageProduct = (props) => {
    return (
        <a onClick={props.onClick}>
            <img
                src={props.src}
                className={`${(props.primary) ? 'xl:h-[450px] h-[340px] w-full' : 'xl:h-24 xl:w-48 h-20 w-40 hover:border-2 hover:scale-105 transition-transform  hover:border-red-500'} ${(props.active) && ' border-2 border-red-500'} cursor-pointer mb-6  object-cover rounded-lg`} />
        </a>
    )
}

export default function Product() {
    const image = [
        'https://store-html.buildwithangga.id/images/product-details-4.jpg',
        'https://store-html.buildwithangga.id/images/product-details-1.jpg',
        'https://store-html.buildwithangga.id/images/product-details-2.jpg',
        'https://store-html.buildwithangga.id/images/product-details-3.jpg'
    ]
    const [imageActive, setImageActive] = useState(image[3])

    return (
        <div>
            <Breadcrumb />
            <div className='xl:flex xl:space-x-10  mb-10'>
                <div className='xl:w-8/12 w-full'>
                    <ImageProduct src={imageActive} primary />
                </div>
                <div className='xl:w-4/12 flex space-x-6 xl:space-x-0 xl:block w-full'>
                    {image.map((val, key) =>
                        <ImageProduct
                            src={val}
                            active={(imageActive === val) ? true : false}
                            key={key.toString()}
                            onClick={() => setImageActive(val)}
                        />)}
                </div>
            </div>
            <div className='mt-5 xl:flex xl:space-x-10 pb-32'>
                <div className='xl:w-8/12 w-full'>
                    <h4 className='text-2xl font-medium mb-1'>Sofa Ternyaman</h4>
                    <span className='text-sm text-gray-400'>By Galih Pratama</span>
                    <h6 className='font-semibold text-red-500 text-xl mt-3'>$ 1,409</h6>
                    <p className='mt-5 text-gray-600 mb-10 xl:mb-0 leading-8'>The Nike Air Max 720 SE goes bigger than ever before with Nike's tallest Air unit yet for unimaginable, all-day comfort. There's super breathable fabrics on the upper, while colours add a modern edge.<br /><br />

                        Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort while transparent mesh and vibrantly coloured details on the upper are blended with timeless OG features for an edgy, modernised look.</p>
                </div>
                <div className='xl:w-4/12 w-full'>
                    <Button className={"flex items-center w-full xl:w-auto justify-center xl:justify-start "}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}
