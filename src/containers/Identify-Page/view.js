import React from 'react'

import './style.scss'
import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

const Identify= () =>{
  return (
    <div className="identify">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Identify 
  