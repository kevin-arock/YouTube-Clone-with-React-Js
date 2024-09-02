import React from 'react'

const Card = ()=>{
    return(
        <div className='flex-col'>
        <div className='w-96 h-60 rounded-lg bg-gray-200 m-2'></div>
        <div className='w-30 h-5 rounded-lg bg-gray-100 m-2'></div>
        <div className='w-30 h-4 rounded-lg bg-gray-100 m-2'></div>
        </div>
    )
}

const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Shimmer