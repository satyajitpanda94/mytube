import React from 'react'
import './css/VideoCard.css'
import { format } from 'timeago.js'

export default function VideoCard({ video }) {
    return (
        <div className='videocard-container'>
            <img
                src={video.snippet.thumbnails.high.url || video.snippet.thumbnails.default.url}
                alt="thumbnail"
                className='video-thumbnail'
            />

            <div className='videocard-buttom'>
                <h4 className='video-title'>
                    {
                        video.snippet.title.length > 85
                            ? video.snippet.title.slice(0, 85) + '...'
                            : video.snippet.title
                    }
                </h4>
                <div className="channel-details">
                    {video.snippet.channelTitle}
                    <span>{format(video.snippet.publishedAt)}</span>
                </div>
            </div>
        </div>
    )
}
