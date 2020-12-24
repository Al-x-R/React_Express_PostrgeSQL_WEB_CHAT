import React from 'react';
import registerImage from '../../assets/images/register.svg'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div id='auth-container'>
      <div id='auth-card'>
        <div>
          <div id='image-section'>
            <img src={registerImage} alt="register"/>
          </div>
          <div id='form-section'>
            <h2>Create an account</h2>
            <form>
              <div className='input-field'>
                <input type="text" placeholder='First name'/>
              </div>
              <div className='input-field'>
                <input type="text" placeholder='Last name'/>
              </div>
              <div className='input-field'>
                <input type="email" placeholder='Email'/>
              </div>
              <div className='input-field'>
                <select name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className='input-field'>
                <input type="text" placeholder='Password'/>
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
