import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput'
import './SignIn.scss';

class SignIn extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      email:'',
      password:''
    }
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render(){
    return(
      <form className="sign-in" onSubmit={this.handleSubmit}>
        <FormInput 
          name='email'
          type='email'
          handleChange={this.handleChange}
          value={this.state.email}
          label="email"
          required
        />
        <FormInput 
          name='password'
          type='password'
          handleChange={this.handleChange}
          value={this.state.email}
          label='password'
          required
        />
        <input type="submit" value="Submit Form" />
      </form>

    )
  }
}
export default SignIn;