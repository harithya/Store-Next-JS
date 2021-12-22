import React from 'react'

export default function BreadItem(props) {
    return (
        <li>
            <a href='#' className={`${(props.active) ? 'text-gray-700' : 'text-gray-400'}`}>{props.children}</a>
        </li>
    )
}
