import React from 'react';

import logo from '../../img/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-flexbox'>
        <div className='child-1'>
            <img src={logo}/>
            <p className='first-p'>Best Movie application to watch or<br></br> buy the newest movie out!</p>
            <p className='second-p'>2022® all right reserved</p>
        </div>
        <div className='child-2'>
            <h3 className='main-p'>Utility</h3>

            <p><a>Partners</a></p>
            <p><a>Teams</a></p>
            <p><a>Terms and conditions</a></p>
            <p><a>Privacy</a></p>
        </div>
        <div className='child-3'>
            <h3 className='main-p'>Careers</h3>

            <p><a>Program</a></p>
            <p><a>Charts</a></p>
        </div>
        <div className='child-4'>
            <h3 className='main-p'>Contact</h3>

            <p>+44 435 4564 234</p>
            <p>email@gmail.com</p>
            
        </div>
        <div className='child-4'>
            <h3 className='main-p'>Support</h3>

            <p>Leave us a Message</p>
            <p>Leave us a Feedback</p>
            
        </div>
    </div>
</div>
  )
}

export default Footer