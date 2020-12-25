import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login.svg';
import './Auth.scss';

import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth';

// props.history
const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, history));
    // AuthService.login({ email, password }).then(res => console.log(res));
    /* axios.post(`http://localhost:3002/login`, {email, password})
       .then(res => {
         console.log('res => ', res)
       })
       .catch(err => {
         console.log('err => ', err)
       })*/

    console.log({ email, password });
  };

  return (
    <div id='auth-container'>
      <div id='auth-card'>
        <div>
          <div id='image-section'>
            <img src={loginImage} alt="login"/>
          </div>
          <div id='form-section'>
            <h2>Welcome back</h2>
            <form onSubmit={handleSubmit}>
              <div className='input-field'>
                <input value={email}
                       onChange={e => setEmail(e.target.value)}
                       required="required"
                       type="email"
                       placeholder='Email'/>
              </div>
              <div className='input-field'>
                <input value={password}
                       onChange={e => setPassword(e.target.value)}
                       required="required"
                       type="text"
                       placeholder='Password'/>
              </div>
              <button>LOGIN</button>
            </form>
            <p>Don`t have an account? <Link to='/register' style={{ textDecoration: 'none' }}>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
