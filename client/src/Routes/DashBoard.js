import React from 'react'

const DashBoard = ({handleLogout}) => {
  return (
    <div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default DashBoard