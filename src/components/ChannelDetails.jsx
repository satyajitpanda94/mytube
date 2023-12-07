import React, { useEffect, useState } from 'react'
import './css/ChannelDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL, options } from '../utils/axios'
import { numberFormater } from '../utils/numberFormater'
import VideoCard from './VideoCard'

export default function ChannelDetails() {
    const { id } = useParams()
    const [channelDetails, setChannelDetails] = useState({})
    const [channelVideos, setChannelVideos] = useState([])
    console.log('--------', channelDetails)
    console.log('*****', channelVideos)
    useEffect(() => {
        axios.get(`${BASE_URL}/channels?id=${id}&part=statistics`, options)
            .then(({ data }) => setChannelDetails(data?.items?.[0]))
        axios.get(`${BASE_URL}/search?channelId=${id}&order=date`, options)
            .then(({ data }) => setChannelVideos(data.items))
    }, [id])

    return (
        <div className='channel-details-container'>
            <div className="banner">
                <img src={channelDetails?.brandingSettings?.image?.bannerExternalUrl} alt="channel banner" />
            </div>
            <div className="channel-details">
                <img src={channelDetails?.snippet?.thumbnails?.high?.url} alt="logo" />
                <div className="text">
                    <div className='channel-name'>
                        {channelDetails?.snippet?.title}
                    </div>
                    {
                        <div style={{ color: 'grey' }}>
                            {channelDetails?.snippet?.customUrl}
                            <span> - </span>
                            {numberFormater(channelDetails?.statistics?.subscriberCount)} subscribers
                            <span> - </span>
                            {numberFormater(channelDetails?.statistics?.videoCount)} videos
                            <p>
                                {channelDetails?.snippet?.description.slice(0, 90)}...
                            </p>
                        </div>
                    }
                </div>

            </div>
            <div className='channel-videos'>
                {
                    channelVideos.map(video => (
                        <>
                            {video.id.videoId && <VideoCard video={video} />}
                        </>
                    ))
                }
            </div>
        </div>
    )
}
