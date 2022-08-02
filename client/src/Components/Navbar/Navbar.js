import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { DummyData } from '../../DummyData';

//imgs
import logo from '../../img/logo.png'

//icons
import { AiOutlineBars } from 'react-icons/ai'
import Sidebar from './Sidebar';

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false);

  const navigate = useNavigate()

  const goToMain = () => {
    navigate('/')
  }

  return (
    <div className='navbar__fixed'>
        {/* navbar for all */}
        <div className='navbar__all'>
            {/* navbar mobile */}
            <div className='toggle__mobileNavbar' onClick={() => setToggle(prev => !prev)}>
                <AiOutlineBars/>
            </div>
            
           {toggle && <Sidebar/>}
            {/* navbar mobile */}


            {/* navbar pc*/}
            <div className='navbar__pc'>
                <div className='navbar__logo' onClick={goToMain}>
                    <img src={logo}/>
                </div>

                <div className='navbar__links'>
                    {DummyData.navbarLinks.map(link => (
                        <li key={link.id}><Link to={link.path}>{link.name}</Link></li>
                    ))}
                </div>


                <div className='navbar__btn'>
                    <button>{DummyData.buttonTexts.title}</button>
                </div>
            </div>
            {/* navbar pc*/}

        </div>
        {/* navbar for all */}
    </div>
  )
}

export default Navbar