import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function SearchItemChannelCard({ channel }) {
    return (
        <Link to={`/channel/${channel.id.channelId}`} className='searched-channel-container'>
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
        </Link>
    )
}
