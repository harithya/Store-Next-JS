import React from 'react'

export default function NavItem(props) {
    return (
        <li className='mb-4 xl:mb-0'>
            <a href="#" className={`hover:opacity-50 cursor-pointer ${props.active ? 'text-black' : 'text-gray-400'}`}>
                {props.children}
            </a>
        </li>
    )
}
