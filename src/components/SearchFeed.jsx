import React from 'react'
import './css/SearchFeed.css'
import SearchItemVideoCard from './SearchItemVideoCard'
import SearchItemChannelCard from './SearchItemChannelCard'

export default function SearchFeed({ items }) {
    return (
        <div className='searchfeed-container'>
            {
                items.length !== 0 &&
                items.map((item, idx) => (
                    <div key={idx} className='item-container'>
                        {item.id.videoId && <SearchItemVideoCard video={item} />}
                        {item.id.channelId && <SearchItemChannelCard channel={item} />}
                    </div>
                ))
            }
        </div>
    )
}
