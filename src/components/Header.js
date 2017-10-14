import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hamburger from './Hamburger'
import MainTitle from './MainTitle'

//import './Header.css'

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <div className="Hamburger-Name-Container">
           <div>All Categories</div>
          <Hamburger 
            onHamburgerClick={this.props.onHamburgerClick} />
        </div>
      </div>
    )
  }
}

export default Header