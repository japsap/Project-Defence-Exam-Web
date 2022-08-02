import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = ({handleLogout, user}) => {
  return (

    <div className='dashboard'>
      <button className='btn__dashboard' onClick={handleLogout}>Log out</button>
      <Link to='/'>go to main</Link>
    </div>
  )
}

export default DashBoard