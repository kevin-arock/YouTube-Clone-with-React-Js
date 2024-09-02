import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export const SideBar = () => {
  const isOpen = useSelector(store => store.app.isMenuOpen);

  if(!isOpen) return null;

  return (
    <div className='w-20  mr-12 mb-2'>
      <div className='mx-2 p-2'>
        <ul className=''>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
    </div>
  )
}
