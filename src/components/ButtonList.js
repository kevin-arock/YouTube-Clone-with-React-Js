import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const btns = ["All","Gaming","Live","Trailers","Cricket","movies"]
  return (
    <div className='flex'>
      {
        btns.map(btn=>{
          return <Button key={btn} name={btn}/>
        })
      }
      
    </div>
  )
}

export default ButtonList