import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { DummyData } from "../../DummyData";

//imgs
import logo from "../../img/logo.png";

//icons
import { AiOutlineBars } from "react-icons/ai";
import { BsCart } from 'react-icons/bs';

//components
import Sidebar from "./Sidebar";


//firebase
import { getAuth } from "firebase/auth";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  const { currentUser } = getAuth();


  return (
    <div className="navbar__fixed">
      {/* navbar for all */}
      <div className="navbar__all">
        {/* navbar mobile */}
        <div
          className="toggle__mobileNavbar"
          onClick={() => setToggle((prev) => !prev)}
        >
          <AiOutlineBars />
        </div>

        {toggle && <Sidebar />}
        {/* navbar mobile */}

        {/* navbar pc*/}
        <div className="navbar__pc">
          <div className="navbar__logo" onClick={goToMain}>
            <img src={logo} />
          </div>

          <div className="navbar__links">
            {DummyData.navbarLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </div>

          <div className="navbar__btn">
            {currentUser != null ? (
              <div className="d-flex">
                <img
                  className="mx-2"
                  style={{ height: "50px", width: "50px", borderRadius:'50%', objectFit:'cover' }}
                  src={currentUser.photoURL == null ? 'https://cdn4.vectorstock.com/i/thumb-large/62/38/avatar-13-vector-42526238.jpg' : currentUser.photoURL}
                />
                <p className="mt-3 ml-2">{currentUser.email == null ? 'Uknown' : currentUser.email}</p>
              </div>
            ) : (
              <button>
                <Link to="/login">{DummyData.buttonLog.title}</Link>
              </button>
            )}
          </div>
          <div className="cart__btn">
            <Link to='/cart'>
              <BsCart/>
            </Link>
            </div>
        </div>
        {/* navbar pc*/}
      </div>
      {/* navbar for all */}
    </div>
  );
};

export default Navbar;
