import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, options } from '../utils/axios'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import './css/Feed.css'
import SecondaryNavbar from './SecondaryNavbar'

export default function Feed() {
    const [items, setItems] = useState([])
    const [category, setCategory] = useState('video');

    useEffect(() => {
        axios.get(`${BASE_URL}/search?q=${category}&type=date`, options)
            .then(({ data }) => setItems(data.items))
    }, [category])

    return (
        <div className='feed-container'>
            <SecondaryNavbar setCategory={setCategory} />
            <div className="feed-item-container">
                {
                    items.length !== 0 && items.map((item, idx) => (
                        <div key={idx}>
                            {item.id.videoId && <VideoCard video={item} />}
                            {item.id.channelId && <ChannelCard channel={item} />}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
