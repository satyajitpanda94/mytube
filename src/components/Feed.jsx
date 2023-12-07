import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, options } from '../utils/axios'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import './css/Feed.css'

export default function Feed() {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/search?q=${'bbc'}&type=date`, options)
            .then(({ data }) => setItems(data.items))
    }, [])

    return (
        <div className='feed-container'>
            {
                items.length !== 0 && items.map((item, idx) => (
                    <div key={idx}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channel={item} />}
                    </div>
                ))
            }
        </div>
    )
}
