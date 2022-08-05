//react components
import { getAuth } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";

//dummy data
import { DummyData } from "../../DummyData";

//img logo
import logo from "../../img/logo.png";

const Sidebar = () => {
  const { currentUser } = getAuth()
  return (
    <div className="navbar__mobile">
      <div className="navbar_mobile_logo">
        <img src={logo} />
      </div>
      <div className="navbar_mobile_links">
        {DummyData.navbarLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </div>
      <div className="mobile_navbar_button">
        <button className="sidebar__btn1"><Link to='/movies'>{DummyData.buttonTexts.title}</Link></button>
        <button className="mt-2 sidebar__btn2"><Link to='/cart'>Cart</Link></button>
     </div>
     {currentUser != null ? (
              <div className="d-flex p-4">
                <img
                  className="mx-2"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src={
                    currentUser.photoURL == null
                      ? "https://cdn4.vectorstock.com/i/thumb-large/62/38/avatar-13-vector-42526238.jpg"
                      : currentUser.photoURL
                  }
                />
                <div className="d-block">
                  <p className="ml-2 email__navbar"> {currentUser.email == null ? "uknown@gmail.com" : currentUser.email}</p>
                  <p className="ml-2 name__navbar" style={{marginTop:'-15px'}}>  {currentUser.displayName == null ? <div className="d-flex"><span style={{color:'rgb(225,22,101)'}}>@</span><p className="text-black">Uknown</p></div>: <span className="d-flex"><span style={{color:'rgb(225,22,101)'}}>@</span><span className="text-black">{`${currentUser.displayName}`}</span></span> }
                </p>
                  </div>
                
                
              </div>
            ) : (
              ""
            )}
    </div>
  );
};

export default Sidebar;
