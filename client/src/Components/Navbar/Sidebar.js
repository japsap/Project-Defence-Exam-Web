//react components
import React from "react";
import { Link } from "react-router-dom";

//dummy data
import { DummyData } from "../../DummyData";

//img logo
import logo from "../../img/logo.png";

const Sidebar = () => {
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
        <button>{DummyData.buttonTexts.title}</button>
     </div>
    </div>
  );
};

export default Sidebar;
