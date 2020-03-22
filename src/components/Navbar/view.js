import React from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as Logo} from '../../assets/img/logo.svg'
import './style.scss'

const Navbar = () => {
  return(
    <div className="header">
      <Link className='logo' to="/">
        <Logo />
      </Link>
      <div className="options">
      <Link className="option" to="/">
          HOME
      </Link>
        <Link className="option" to="/shop">
          SHOP
      </Link>
        <Link className="option" to="/contact">
          CONTACT
      </Link>
      <Link className="option" to="/identify">
          SIGN IN
      </Link>
      </div>
    </div>
  )
}

export default Navbar