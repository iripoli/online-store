import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import selectHomeMenuItems from '../../redux/homeMenu/homeMenu-selector'

import './style.scss'
import MenuItem from '../MenuItem/view'

const HomeMenu = ({itemsData})=> {
     return(
     <div className="home-menu">
     {itemsData.map(({id, ...moreData}) =>{
       return(<MenuItem key={id} {...moreData}/>)}
        )}
      </div>
       )
   }

const mapStateToProps = createStructuredSelector({
  itemsData: selectHomeMenuItems
})

export default  connect(mapStateToProps)(HomeMenu)