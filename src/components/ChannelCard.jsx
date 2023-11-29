import React from 'react'
import './css/ChannelCard.css'

export default function ChannelCard({ channel }) {
    return (
        <div className='channelcard-container'>
            <div className="channel-thumbnail-container">
                <img
                    src={channel.snippet.thumbnails.high.url || channel.snippet.thumbnails.default.url}
                    alt=""
                    className='channel-thumbnail'
                />
            </div>
            <div className="channelcard-buttom">
                <h3>{channel.snippet.channelTitle}</h3>
            </div>
        </div>
    )
}
