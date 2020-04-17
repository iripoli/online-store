import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors'

import { auth } from '../../firebase/config'

import CartIcon from '../../Components/Cart-Icon'
import CartDropDown from '../../Components/CartDropDown'

import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import './style.scss'

const Navbar = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className='logo' to="/online-store">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/online-store">
          HOME
      </Link>
        <Link className="option" to="/shop">
          SHOP
      </Link>
        {/* <Link className="option" to="/contact">
          CONTACT
      </Link> */}

        {
          currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
            <Link className="option" to="/identify">
              SIGN IN
      </Link>
        }
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Navbar)