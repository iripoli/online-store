import React from 'react'

import {auth, createUserProfileDoc} from '../../firebase/config'

import FormInput from '../Form-Input'
import Button from '../Button'

import './style.scss'

class SignUp extends React.Component{
  constructor(){
    super()
  
  this.state={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  }

  handleSubmit=async event=>{
    event.preventDefault()
    const {displayName, email, password, confirmPassword}=this.state
    if(password !== confirmPassword) {
      alert("password don't match")
      return
    }
    try{
      const {user}=await auth.createUserWithEmailAndPassword(email, password)

     await createUserProfileDoc(user, {displayName});

     this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    }
    catch(error){console.log(error)};
    }
    
    handleChange = event=>{
      const {name, value} = event.target
      this.setState({[name]: value})
    }
    
    
    
    render(){
      const {displayName, email, password, confirmPassword}=this.state
      return(
        <div className="sign-up">
          <h2 className="title">I do not have an account</h2>
          <span>Sign up using your email!</span>
          <form className="sign-ip-form" onSubmit={this.handleSubmit}>
            <FormInput 
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label="Display name"
            required />
  
            <FormInput 
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label="Email"
            required />
  
            <FormInput 
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label="Password"
            required />
  
            <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm password"
            required />
            <Button type="submit">SIGN UP</Button>
          </form>
        </div>
      )
    }
  }



export default SignUp