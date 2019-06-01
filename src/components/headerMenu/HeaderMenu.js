import React from 'react';
import './headerMenu.css';
import logo from './Logopit_1558m8335666.png';
function HeaderMenu() {
  return (
    <div className='headerMenu'>
      <div className='headerMenu-logo'>
        <img src={logo} alt='' />
      </div>
      <div className='headerMenu-sub'>
        <i class='fas fa-share-alt' />
        <i class='fab fa-instagram' />
      </div>
    </div>
  );
}

export default HeaderMenu;
