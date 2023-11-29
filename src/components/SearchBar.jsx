import React, { useState } from 'react'
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import './css/SearchBar.css'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <form className="searchbar-container">
            <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='text-input'
            />
            {
                searchTerm && <button
                    className='clear-search-input'
                    onClick={(e) => setSearchTerm('')}
                >
                    <AiOutlineClose />
                </button>
            }
            <button type='submit' className='search-button'>
                <PiMagnifyingGlassThin className='magnifying-glass' />
            </button>
        </form>
    )
}
