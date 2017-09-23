import React, { Component } from 'react'
import Modal from '../modal/Modal'
import PostsList from './PostsList'
import Header from '../Header'
import SideNav from '../SideNav'

class Posts extends Component {
    state = {
    hamburgerClicked: false
  }

  onHamburgerClick = () => {
    this.setState({
      hamburgerClicked: !this.state.hamburgerClicked
    })
  }

  render() {
      const {match} = this.props
    let sideNavClass = ['Side-Nav', 'Side-Nav-Hide']
    if (this.state.hamburgerClicked) {
      sideNavClass = ['Side-Nav', 'Side-Nav-Show']
    }
    
    return (
     <div>
         <Header 
          onHamburgerClick={this.onHamburgerClick} 
          hamburgerClicked={this.state.hamburgerClicked} />
        <div className="Container">
          <SideNav 
            sideNavClass={sideNavClass}/>

        <div >
               <Modal />
        </div>

        <div >
               <PostsList match={match} />
        </div>
     </div>
    </div>

    )
}
}
export default Posts;