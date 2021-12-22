
import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

export default function SignIn() {
    return (
        <div className='xl:flex xl:py-24 py-11'>
            <div className='xl:w-6/12 w-full mb-10 xl:mb-0 flex justify-center items-center'>
                <img src={"/img/login-placeholder.png"} className="h-80" />
            </div>
            <div className='xl:w-4/12 w-full'>
                <h1 className='leading-10 text-2xl mb-8'>Belanja Kebutuhan Utama, <br /> Menjadi Lebih Mudah</h1>
                <div>
                    <Input label="Email Address" />
                    <Input label="Email Address" />
                    <div className='mt-8'>
                        <Button className="w-full mb-3">Sign in to My Account</Button>
                        <Button className="w-full bg-gray-200 text-gray-500 hover:bg-gray-300">Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
