import React, { Component } from 'react'
import Modal from '../modal/Modal'
import PostsList from './PostsList'
import Header from '../Header'
import SideNav from '../SideNav'
import '../../../public/App.css'

class Posts extends Component {
   

  render() {
    const {match} = this.props
    
    
    return (
     <div>
         
        <div >
               <Modal className="modal-right"/>
        </div>

        <div >
               <PostsList match={match} />
        </div>
     </div>

    )
}
}



export default Posts;