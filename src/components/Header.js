import { Avatar } from '@material-ui/core';
import { AccessTime, HelpOutline, Search } from '@material-ui/icons';
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        {/* Avatar for logged in user */}
        <Avatar className='header__avatar' src='Aseer KT' alt='Aseer KT' />
        {/* Time Icon */}
        <AccessTime />
      </div>
      <div className='header__search'>
        {/* Search Icon */}
        <Search />
        {/* Search Input */}
        <input type='text' placeholder='Search Slack' />
      </div>
      <div className='header__right'>
        {/* Help Icon */}
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
