import React from 'react'
import './css/SecondaryNavbar.css'

export default function SecondaryNavbar({setCategory}) {
    const categories = ['All', 'New', 'Live', 'Music', 'Movies', 'News', 'Gaming', 'Sports', 'Comedy']
    
    return (
        <div className='secondary-navbar'>
            {
                categories.map((category, idx) => (
                    <button key={idx} onClick={(e) => { setCategory(category) }}>
                        {category}
                    </button>
                ))
            }
        </div>
    )
}

