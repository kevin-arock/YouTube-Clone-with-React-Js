import React, { useEffect, useState } from 'react'
import { VIDEOS_API } from '../utils/constants';
import Video from './Video';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const[videos,setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos = async ()=>{
    const videos = await fetch(VIDEOS_API);
    const data = await videos.json();
    setVideos(data.items);
  }

  if(videos.length==0) return <Shimmer/>

  return <div className='flex flex-wrap mt-4'>
    {videos.map(video=><Link to={"/watch?v="+video.id}><Video key={video.id} details={video} /></Link>)}
  </div>
}

export default VideoContainer