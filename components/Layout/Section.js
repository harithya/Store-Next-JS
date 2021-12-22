import React from 'react'

export default function Section(props) {
    return (
        <section className='mb-10'>
            <h4 className='text-xl mb-6 text-gray-800'>{props.title}</h4>
            {props.children}
        </section>
    )
}
