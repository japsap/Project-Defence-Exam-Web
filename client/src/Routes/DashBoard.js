import React from 'react'

const DashBoard = ({handleLogout, user}) => {
  return (
    <div className='dashboard'>
      <h1>Username: {user.email}</h1>

      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default DashBoard