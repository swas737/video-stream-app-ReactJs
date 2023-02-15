import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
      getVideos();
    }, [])
    const getVideos = async () =>{
        const data = await fetch(YOUTUBE_VIDEOS_API)
        const json = await data.json();
        setVideos(json.items);
    }
  return (
    <div className="flex flex-wrap">
      {/* HOC Example */}
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {/* -------- */}
        {videos.map((video)=><Link to={"/watch?v="+ video.id} key={video.id}><VideoCard info={video} /></Link>)}
    </div>
  )
}

export default VideoContainer