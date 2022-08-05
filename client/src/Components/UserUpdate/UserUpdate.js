import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';

import { upload } from '../../Hooks/fire';

const UserUpdate = ({handleSignout}) => {
  const { currentUser } = getAuth()
  const [ photo, setPhoto ] = useState(null);
  const [photoUrl, setPhotoUrl] = useState('https://cdn4.vectorstock.com/i/thumb-large/62/38/avatar-13-vector-42526238.jpg');
  const [ name, setName ] = useState('');


  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, name);
  }



  useEffect(() => {
    if(currentUser?.photoURL){
      setPhotoUrl(currentUser.photoURL)
    }
  }, [currentUser])



  return (
    <div className='d-flex justify-content-center' >
        <div className='updateUser__form' >

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

            <button className='mb-3 btn-2' onClick={handleSignout}>Log out</button>

            <button className='btn-1' onClick={handleClick}>Update Profile</button>

        </div>
    </div>
  );
};

export default UserUpdate;