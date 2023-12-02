import React, { useState } from 'react'
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import './css/SearchBar.css'
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate= useNavigate()

    const handleSearchTerm = (e) => {
        e.preventDefault()
        if(searchTerm)
           navigate(`/search/${searchTerm}`)
    }

    return (
        <form className="searchbar-container" onSubmit={handleSearchTerm}>
            <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='text-input'
            />
            {
                searchTerm && <div
                    className='clear-search-input'
                    onClick={(e) => setSearchTerm('')}
                >
                    <AiOutlineClose />
                </div>
            }
            <button type='submit' className='search-button'>
                <PiMagnifyingGlassThin className='magnifying-glass' />
            </button>
        </form>
    )
}
