import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL, options } from '../utils/axios'
import ReactPlayer from 'react-player'
import './css/VideoDetails.css'
import { numberFormater } from '../utils/numberFormater'
import { LuThumbsUp } from "react-icons/lu";
import VideoCard from './VideoCard'

export default function VideoDetails() {
    const { id } = useParams()
    const [videoDetails, setVideoDetails] = useState(null)
    const [channelDetails, setChannelDetails] = useState(null)
    const [relatedVideos, setRelatedVideos] = useState([])
    console.log(videoDetails)
    console.log(channelDetails)
    console.log(relatedVideos)

    useEffect(() => {
        axios.get(`${BASE_URL}/videos?id=${id}&part=statistics`, options)
            .then(({ data }) => setVideoDetails(data?.items?.[0]))
        axios.get(`${BASE_URL}/search?relatedToVideoId=${id}`, options)
            .then(({ data }) => setRelatedVideos(data.items))
    }, [id])

    useEffect(() => {
        axios.get(`${BASE_URL}/channels?id=${videoDetails?.snippet?.channelId}`, options)
            .then(({ data }) => setChannelDetails(data?.items?.[0]))
    }, [videoDetails])

    return (
        <div className='video-container'>
            <div className="video-details">
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${id}`}
                    controls={true}
                    playing={false}
                    className="react-player"
                />
                <h3 className="video-title">
                    {
                        videoDetails?.snippet?.title
                    }
                </h3>
                <div className="video-details-buttom">
                    <div className="channel-details">
                        <img
                            src={channelDetails?.snippet?.thumbnails?.high?.url || channelDetails?.snippet?.thumbnails?.default?.url}
                            alt="thumbnail"
                            className='channel-thumbnail'
                        />
                        <div className="channel-details-right">
                            <h4>{channelDetails?.snippet?.title}</h4>
                            <span>{numberFormater(channelDetails?.statistics?.subscriberCount)} Subscribers</span>
                        </div>
                    </div>
                    <div className="video-stats">
                        <div className='likes'>
                            <LuThumbsUp />
                            {numberFormater(videoDetails?.statistics?.likeCount)}
                        </div>
                        <div className='views'>{numberFormater(videoDetails?.statistics?.viewCount)} Views</div>
                    </div>
                </div>
            </div>
            <div className="related-videos">
                {
                    relatedVideos.length !== 0 &&
                    relatedVideos.slice(0, 5).map(video => (<VideoCard video={video} />))
                }
            </div>
        </div>
    )
}
