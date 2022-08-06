import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';

import { upload, uploadPicture, uploadUsername } from '../../Hooks/fire';

import { AiOutlineClose } from 'react-icons/ai'

const UserUpdate = ({handleSignout}) => {
  const { currentUser } = getAuth()
  const [ photo, setPhoto ] = useState(null);
  const [ photoUrl, setPhotoUrl ] = useState('https://cdn4.vectorstock.com/i/thumb-large/62/38/avatar-13-vector-42526238.jpg');
  const [ name, setName ] = useState('');

  const [ error, setError] =  useState('');


  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleChanePicture(e) {
    e.preventDefault();
    if(photo == ''){
      alert('Please enter a correct profile data!')
    } else {
      uploadPicture(photo, currentUser);
    }
  }

  const handleChangeUsername = (e) => {
    e.preventDefault();

    if(name == '' ){
      setError('You must put a correct username!')
    } else if(name.length <= 5){
      setError('Your username must unclude 6 or more characters!')
    } else {
      uploadUsername(currentUser, name)
    }
  }

  useEffect(() => {
    if(currentUser?.photoURL){
      setPhotoUrl(currentUser.photoURL)
    }
  }, [currentUser])


  return (
    <div className='d-flex justify-content-center' >
        <div className='updateUser__form' >

          <AiOutlineClose className='mb-3 handleLogOut' onClick={handleSignout}/>

            <h1 className='text-center underline'>Update Profile</h1>

            <img className='mx-auto d-block mt-5' style={{borderRadius:"50%", height:'200px', width:'200px', objectFit:'cover'}} src={photoUrl}/>

            {/* update picture */}
            <div className="logIn__group mt-5">
              <input
                className="logIn__input"
                accept='image/*'
                type="file"
                required
                onChange={handleChange}
              />
            </div>

            <button className='btns__update updatePfp mb-4' onClick={handleChanePicture}>Update Picture</button>

            {/* update pciture */}       

            <div className="logIn__group">
              <input
                className="logIn__input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="logIn__highlight"></span>
              <span className="logIn__bar"></span>
              <label className="logIn__label">Name</label>
            </div>

            <p className='err__msg'>{error}</p>

            <button className='btns__update updateUsername' onClick={handleChangeUsername}>Update Username</button>

            

            

        </div>
    </div>
  );
};

export default UserUpdate;