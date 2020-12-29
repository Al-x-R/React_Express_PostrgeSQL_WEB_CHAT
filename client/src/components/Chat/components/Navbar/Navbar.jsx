import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {logout} from '../../../../store/actions/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.scss';

const Navbar = () => {
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch()
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  return (
    <div id='navbar'>
      <h2>Chat.io</h2>
      <div id='profile-menu'
           onClick={() => setShowProfileOptions(!showProfileOptions)}>
        <img width="40" height="40" src={user.avatar} alt="Avatar"/>
        <p>{user.firstName} </p>
        <FontAwesomeIcon icon='caret-down' className='fa-icon'/>
        {
          showProfileOptions &&
          <div id='profile-options'>
            <p>Update profile</p>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
