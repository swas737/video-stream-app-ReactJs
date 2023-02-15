import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    //Early return
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
         <ul>
            <li className='hover:bg-gray-100 p-2'><Link to="/">Home</Link></li>
            <li className='hover:bg-gray-100 p-2'><Link to="/">Shorts </Link></li>
            <li className='hover:bg-gray-100 p-2'><Link to="/">Subscriptions </Link></li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li className='hover:bg-gray-100 p-2'><Link to="/">React </Link></li>
            <li className='hover:bg-gray-100 p-2'><Link to="/">Javascript </Link></li>
            <li className='hover:bg-gray-100 p-2'><Link to="/">Tailwind </Link></li>
            <li className='hover:bg-gray-100 p-2'><Link to="/">Css </Link></li>
        </ul>
        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
            <li className='hover:bg-gray-100 p-2'><Link to="/">Music </Link></li>
            <li className='hover:bg-gray-100 p-2'><Link to="/">Sports </Link></li>
            <li className='hover:bg-gray-100 p-2'><Link to="/">Gaming </Link></li>
            <li className='hover:bg-gray-100 p-2'><Link to="/">Movies </Link></li>
        </ul>
    </div>
  )
}

export default Sidebar