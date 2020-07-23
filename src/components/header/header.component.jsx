import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className='navbar'>
        <Link to='/'>
            <div className='logo'>Logo</div>
            </Link>
            <div>Title</div>
            <div>
                <i className='fas fa-user '></i>
            </div>
        </div>
    )
}