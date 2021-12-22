import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function NavItem(props) {
    const router = useRouter();
    return (
        <li className='mb-4 xl:mb-0'>
            <Link href={props.href ?? '#'}>
                <a href="#" className={`hover:opacity-50 cursor-pointer ${(router.asPath == props.href) ? 'text-black' : 'text-gray-400'}`}>
                    {props.children}
                </a>
            </Link>
        </li>
    )
}
