import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { DummyData } from "../../DummyData";

//imgs
import logo from "../../img/logo.png";

//icons
import { AiOutlineBars } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

//components
import Sidebar from "./Sidebar";

//firebase
import { getAuth } from "firebase/auth";

const Navbar = ({ items }) => {
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

        {toggle && <Sidebar items={items}/>}
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
                  <p className="ml-2 name__navbar">  {currentUser.displayName == null ? <div className="d-flex"><span style={{color:'rgb(225,22,101)'}}>@</span><p className="text-black">Uknown</p></div>: <span className="d-flex"><span style={{color:'rgb(225,22,101)'}}>@</span><span className="text-black">{`${currentUser.displayName}`}</span></span> }
                </p>
                  </div>
                
                
              </div>
            ) : (
              <button>
                <Link to="/login">{DummyData.buttonLog.title}</Link>
              </button>
            )}
          </div>
          <div className="cart__btn d-flex">
            <Link to="/cart">
              <BsCart />
            </Link>
            <span>{items}</span>
          </div>
        </div>
        {/* navbar pc*/}
      </div>
      {/* navbar for all */}
    </div>
  );
};

export default Navbar;
