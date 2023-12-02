import React, { useEffect, useState } from 'react'
import './css/SearchFeed.css'
import { format } from 'timeago.js'
import axios from 'axios'
import { BASE_URL, options } from '../utils/axios'

export default function SearchItemVideoCard({ video }) {
    const [channelData, setChannelData] = useState(null)
    useEffect(() => {
        axios.get(`${BASE_URL}/channels?id=${video.snippet.channelId}`, options)
            .then(({ data }) => setChannelData(data?.items?.[0]))
    }, [video])

    return (
        <div className='searched-video-container'>
            <img
                src={video.snippet.thumbnails.high.url || video.snippet.thumbnails.default.url}
                alt="thumbnail"
                className='searched-video-thumbnail'
            />

            <div className='searched-videocard-right'>
                <h3 className='searched-video-title'>
                    {
                        video.snippet.title
                    }
                </h3>
                <span>{format(video.snippet.publishedAt)}</span>
                <div className="channel-details">
                    {
                        channelData &&
                        <img
                            src={channelData.snippet.thumbnails.high.url || channelData.snippet.thumbnails.default.url}
                            alt="thumbnail"
                            className='searched-videocard-channel-thumbnail'
                        />
                    }
                    <span className='channel-name'>{video.snippet.channelTitle}</span>
                </div>
                <span>{video.snippet.description}</span>
            </div>
        </div>
    )
}
