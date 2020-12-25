import React, { useState } from 'react';
import registerImage from '../../assets/images/register.svg';
import { Link } from 'react-router-dom';
import './Auth.scss';

import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/auth';

const Register = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({firstName, lastName, gender, email, password }, history));


    console.log({ email, password });
  };

  return (
    <div id='auth-container'>
      <div id='auth-card'>
        <div>
          <div id='image-section'>
            <img src={registerImage} alt="register"/>
          </div>
          <div id='form-section'>
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit}>
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
                <input value={password}
                       onChange={e => setPassword(e.target.value)}
                       type="text"
                       required="required"
                       placeholder='Password'/>
              </div>
              <button>REGISTER</button>
            </form>
            <p>Already have an account? <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
