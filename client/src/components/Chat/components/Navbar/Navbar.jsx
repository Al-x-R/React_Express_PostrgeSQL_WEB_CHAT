import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../../../store/actions/auth';
import { logout } from '../../../../store/actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.scss';
import Modal from '../../../Modal/Modal';

const Navbar = () => {
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();

  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = { firstName, lastName, gender, email, avatar };
    if (password.length > 0) {
      form.password = password
    }

    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }

    dispatch(updateProfile(formData)).then(() => setShowProfileModal(false))
  };

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
            <p onClick={() => setShowProfileModal(true)}>Update profile</p>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        }
        {
          showProfileModal &&
          <Modal click={() => setShowProfileModal(false)}>
            <Fragment key='header'>
              <h3 className='m-0'>Update profile</h3>
            </Fragment>
            <Fragment key='body'>
              <form action="">
                <div className='input-field'>
                  <input value={firstName}
                         onChange={e => setFirstName(e.target.value)}
                         type="text"
                         required="required"
                         placeholder='First name'/>
                </div>
                <div className='input-field'>
                  <input value={lastName}
                         onChange={e => setLastName(e.target.value)}
                         type="text"
                         required="required"
                         placeholder='Last name'/>
                </div>
                <div className='input-field'>
                  <input value={email}
                         onChange={e => setEmail(e.target.value)}
                         type="email"
                         required="required"
                         placeholder='Email'/>
                </div>
                <div className='input-field'>
                  <select onChange={e => setGender(e.target.value)}
                          value={gender}
                          required="required"
                          name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className='input-field'>
                  <input onChange={e => setAvatar(e.target.files[0])}
                         type="file"
                  />
                </div>
                <div className='input-field'>
                  <input value={password}
                         onChange={e => setPassword(e.target.value)}
                         type="text"
                         required="required"
                         placeholder='Password'/>
                </div>
              </form>
            </Fragment>
            <Fragment key='footer'>
              <button onClick={handleSubmit}
                      className='btn-success'>
                UPDATE
              </button>
            </Fragment>
          </Modal>
        }
      </div>
    </div>
  );
};

export default Navbar;
