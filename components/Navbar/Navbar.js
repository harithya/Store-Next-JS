import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../Button'
import NavItem from './NavItem'
import Link from 'next/link'

export default function Navbar() {
    const [collapse, setCollapse] = useState(false)
    return (
        <header className='py-5 flex sticky top-0 backdrop-blur-sm bg-white/70 xl:px-48 px-5 z-50 flex-wrap items-center'>
            <div className='w-6/12'>
                <Link href={"/"}>
                    <a> <Image src={'/img/logo.svg'} height={50} width={50} /></a>
                </Link>
            </div>
            <div className='w-6/12 flex xl:hidden justify-end'>
                <button className='xl:hidden px-4 py-2 ' onClick={() => setCollapse(!collapse)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
            </div>
            <div className={`xl:w-6/12 flex ${(collapse) ? 'w-full justify-start mt-3' : 'hidden justify-end xl:flex'}`}>
                <ul className='xl:flex xl:space-x-10 w-full xl:justify-end items-center'>
                    <NavItem href="/">Home</NavItem>
                    <NavItem>Categories</NavItem>
                    <NavItem>Rewards</NavItem>
                    <NavItem href="/auth/sign-up">Sign Up</NavItem>
                    <li>
                        <Link href={"/auth/sign-in"}>
                            <a>
                                <Button className="w-full">Sign In</Button>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
