import React, { useState } from 'react';
import logo from '../images/meesho_logo.png';
import { Link } from "react-router-dom";

import '../css/Header.css';
import Profile_Card from './Profile_Card';
import Download_Card from './Download_card';
const Header = () => {
  const [showDownloadDropdown, setShowDownloadDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <>
      <div className="header_upper">
        <nav className="logo">
          <Link to="/">
            <img className="meesho_logo" src={logo} alt="meesho_logo" />
          </Link>
        </nav>
        <div className="search">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" />
        </div>
        <div className="header_right">
          <div id="download_btn">
            <nav onMouseEnter={() => setShowDownloadDropdown(true)} onMouseLeave={() => setShowDownloadDropdown(false)}>
              <Link to="download">
                <div id="mobile_icon">
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                </div>
                <div className="btn_text">Download App</div>
              </Link>
              {showDownloadDropdown && <Download_Card />}
            </nav>
          </div>
          <div className="supplier_btn">
            <nav>
              <Link to="/supplier">
                <div className="btn_text">Become a Supplier</div>
              </Link>
            </nav>
          </div>
          <div className="profile_btn">
            <nav onMouseEnter={() => setShowProfileDropdown(true)} onMouseLeave={() => setShowProfileDropdown(false)}>
              <Link to="profile">
                <div className="profile_icon">
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                </div>
                <div className="btn_text">Profile</div>
              </Link>
              {showProfileDropdown && <Profile_Card  />}
            </nav>
          </div>
          <div className="cart_btn">
            <nav>
              <Link to="/cart">
                <div className="cart_icon">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
                <div className="btn_text">Cart</div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
