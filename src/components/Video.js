import React from 'react'

const Video = ({details}) => {
console.log(details);
  return (
    <div className='w-90 p-2'>
        <img alt='thumbnail' className='rounded-lg' src={details.snippet.thumbnails.medium.url}/>
        <div className='w-80 mt-2'>
            <p className='font-bold'>{details.snippet.title}</p>
            <p className='mt-2'>{details.snippet.channelTitle}</p>
            <p className=''>{details.statistics.viewCount} views</p>
            

        </div>
        
    </div>
  )
}

export default Video