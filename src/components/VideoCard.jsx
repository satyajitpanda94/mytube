import React, { useEffect, useState } from 'react'
import './css/VideoCard.css'
import { format } from 'timeago.js'
import axios from 'axios'
import { BASE_URL, options } from '../utils/axios'

export default function VideoCard({ video }) {
    const [channelData, setChannelData] = useState(null)
    useEffect(() => {
        axios.get(`${BASE_URL}/channels?id=${video.snippet.channelId}`, options)
            .then(({ data }) => setChannelData(data?.items?.[0]))
    }, [video])

    return (
        <div className='videocard-container'>
            <img
                src={video.snippet.thumbnails.high.url || video.snippet.thumbnails.default.url}
                alt="thumbnail"
                className='video-thumbnail'
            />

            <div className='videocard-details'>
                <h4 className='video-title'>
                    {
                        video.snippet.title.length > 85
                            ? video.snippet.title.slice(0, 85) + '...'
                            : video.snippet.title
                    }
                </h4>
                <div className="videocard-buttom">
                    <div className="channel-details">
                        {
                            channelData &&
                            <img
                                src={channelData.snippet.thumbnails.high.url || channelData.snippet.thumbnails.default.url}
                                alt="thumbnail"
                                className='videocard-channel-thumbnail'
                            />
                        }
                        <span>
                            {video.snippet.channelTitle}
                        </span>
                    </div>
                    <span>{format(video.snippet.publishedAt)}</span>
                </div>
            </div>
        </div>
    )
}
