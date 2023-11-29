import React from 'react'
import './css/Navbar.css'
import SearchBar from './SearchBar'

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className="navbar-right">
                <span className="logo">YouTube</span>
            </div>
            <SearchBar />
        </div>
    )
}
