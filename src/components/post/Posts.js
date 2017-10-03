import React, { Component } from 'react'
import Modal from '../modal/Modal'
import PostsList from './PostsList'
import Header from '../Header'
import SideNav from '../SideNav'
import '../../../public/App.css'

class Posts extends Component {
    // state = {
  //   hamburgerClicked: false
  // }

  // onHamburgerClick = () => {
  //   this.setState({
  //     hamburgerClicked: !this.state.hamburgerClicked
  //   })
  // }

  render() {
    const {match} = this.props
    //   const {match} = this.props
    //   let sideNavClass = ['Side-Nav', 'Side-Nav-Hide']
    // let postsClass = ['Post-Container']
    // if (this.state.hamburgerClicked) {
    //   sideNavClass = ['Side-Nav', 'Side-Nav-Show']
    //   postsClass = ['Post-Container-Show']
    // }
    
    return (
     <div>
         {/* <Header 
          onHamburgerClick={this.onHamburgerClick} 
          hamburgerClicked={this.state.hamburgerClicked} />
        <div className="Container">
          <SideNav 
            sideNavClass={sideNavClass}/>
            <div className={postsClass.join(' ')}> */}

        <div >
               <Modal className="modal-right"/>
        </div>

        <div >
               <PostsList match={match} />
        </div>
     </div>
//     </div>
// </div>
    )
}
}



export default Posts;