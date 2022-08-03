import React from 'react'

import Header from '../Components/Header/Header';
import Sponsors from '../Components/Swiper/Sponsors';

const MainPage = ({ user }) => {
  return (
    <div>
      <Header user={user}/>
      <Sponsors/>
    </div>
  )
}

export default MainPage