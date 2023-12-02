import React from 'react'
import './css/Navbar.css'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className="navbar-right">
                <Link to={'/'}>
                    <span className="logo">YouTube</span>
                </Link>
            </div>
            <SearchBar />
        </div>
    )
}
