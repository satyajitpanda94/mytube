import React, { useEffect, useState } from 'react'
import './css/SearchFeed.css'
import { format } from 'timeago.js'
import axios from 'axios'
import { BASE_URL, options } from '../utils/axios'
import { Link } from 'react-router-dom'

export default function SearchItemVideoCard({ video }) {
    const [channelData, setChannelData] = useState(null)
    useEffect(() => {
        axios.get(`${BASE_URL}/channels?id=${video.snippet.channelId}`, options)
            .then(({ data }) => setChannelData(data?.items?.[0]))
    }, [video])

    return (
        <div className='searched-video-container'>
            <Link to={`/video/${video.id.videoId}`}>
                <img
                    src={video.snippet.thumbnails.high.url || video.snippet.thumbnails.default.url}
                    alt="thumbnail"
                    className='searched-video-thumbnail'
                />
            </Link>
            <div className='searched-videocard-right'>
                <Link to={`/video/${video.id.videoId}`}>
                    <h3 className='searched-video-title'>
                        {
                            video.snippet.title
                        }
                    </h3>
                </Link>
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
