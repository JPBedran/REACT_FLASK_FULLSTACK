import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import './SignIn.scss';
import { sign_in_user } from '../../store/actions/signinAction';

const SignIn = () => {

  const [userCredentials, setCredentials] = useState({
    email:'',
    password:''
  })

  const dispatch = useDispatch(); 
  const { email,password } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();
    // setCredentials({ email: '', password: '' })
    dispatch(sign_in_user(email,password))
  };
  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
    console.log('Data',email,password)
  };
  // render(){
  return(
    <div className="sign-in">
      <h2>I Already have a password</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput 
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='password'
          required
        />
        <CustomButton type="submit" value="Submit Form">
          SIGN IN
        </CustomButton>
      </form>
    </div>

  )
  // }
}
export default SignIn;