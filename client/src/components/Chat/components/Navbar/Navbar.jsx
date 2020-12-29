import React from 'react';
import { useSelector } from 'react-redux';
import './Navbar.scss';

const Navbar = () => {
  const user = useSelector(state => state.authReducer.user);

  return (
    <div id='navbar'>
      <h2>Chat.io</h2>
      <div id='profile-menu'>
        <img src="" alt="Avatar"/>
        <p>{user.firstName} {user.lastName}</p>
      </div>
    </div>
  );
};

export default Navbar;