import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";

export default function SearchItemChannelCard({ channel }) {
    console.log(channel)
    return (
        <div className='searched-channel-container'>
            <div className="image-container">
                <img
                    src={channel.snippet.thumbnails.high.url || channel.snippet.thumbnails.default.url}
                    alt="thumbnail"
                    className='searched-channel-thumbnail'
                />
            </div>
            <div className="searched-channel-card-right">
                <h3 className='searched-channel-title'>
                    {channel.snippet.channelTitle}
                    <AiFillCheckCircle color='gray' size='1vw' />
                </h3>
                <span>{channel.snippet.description}</span>
            </div>
        </div>
    )
}
