import React, { useState } from "react";
import { Link } from "react-router-dom";

//components
import MoviePoster from "../Components/Blog/MoviePoster";
import Navbar from "../Components/Navbar/Navbar";
import UserUpdate from "../Components/UserUpdate/UserUpdate";


import { AiOutlineEdit, AiOutlineFolderOpen } from 'react-icons/ai'
import { BiPurchaseTag } from 'react-icons/bi'
const DashBoard = ({ handleSignout }) => {
  //toggle between updating the user or posting the blog
  const [blogPost, setBlogPost] = useState(true);

  return (
    <div className="dashboard">
      <div className="sidebar__dashboard">
        <div className="dashboard__links">
          <li onClick={() => setBlogPost(prev => !prev)}><p><AiOutlineEdit className="icon"/> Edit Profile</p></li>
          <li onClick={() => setBlogPost(prev => !prev)}><p><AiOutlineFolderOpen className="icon"/> Post a Blog</p></li>
          <li><Link to='/moviesBuy' style={{textDecoration:'none'}}><p><BiPurchaseTag className="icon"/> Buy a Movie</p></Link></li>
        </div>
      </div>
      <div className="mt-5">
      {blogPost ? <MoviePoster/> : <UserUpdate handleSignout={handleSignout} />}
        </div>
    </div>
  );
};

export default DashBoard;
