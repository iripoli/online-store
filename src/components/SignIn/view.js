import React from 'react'

import {auth, signInWithGoogle } from '../../firebase/firebase-utils'

import './style.scss'
import FormInput from '../Form-Input/view'
import Button from '../Button'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const {email, password}=this.state

    try{
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    }catch(error){console.log(error)}

    console.log(this.props)
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }


  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required />

          <FormInput name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>{''}
            Sign in with Google {''}
            </Button>
          </div>
        </form>


      </div>

    )
  }

}

export default SignIn