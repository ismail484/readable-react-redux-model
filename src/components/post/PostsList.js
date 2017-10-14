import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts,deletePosts } from '../../action/postsAction'
import  Voting  from '../Voting/'
import * as ActionType from '../../action/ActionType'
import Post from './Post'
import SortedBy from './SortedBy'
import Header from '../Header'
import SideNav from '../SideNav'
import '../../../public/App.css'
//import './PostsList.css'

class PostsList extends Component {
   state = {
    hamburgerClicked: false
  }

  onHamburgerClick = () => {
    this.setState({
      hamburgerClicked: !this.state.hamburgerClicked
    })
  }

  componentDidMount() {
    if (this.props.posts.length > 0) {
      this.props.deletePosts()
    }
    this.props.getPosts()
  }

  render() {
     
      let sideNavClass = ['Side-Nav', 'Side-Nav-Hide']
    let postsClass = ['Post-Container']
    if (this.state.hamburgerClicked) {
      sideNavClass = ['Side-Nav', 'Side-Nav-Show']
      postsClass = ['Post-Container-Show']
    }


    const { posts, match } = this.props
    const filteredPosts = posts.filter(post => {
      if(match.params.category) {
        return !post.deleted && post.category === match.params.category
      } else {
        return !post.deleted 
      }
    })
    
    let postList

    // TODO - write in better way - DRY principle
    if (filteredPosts.length > 0) {
      if(this.props.sort === 'popular') {
        postList = filteredPosts.sort((a, b) => {
          if(a.voteScore > b.voteScore) {
            return -1
          } else {
            return 1
          }
          return 0
        }).map(post => (<li key={post.id}><Post post={post} /></li>))
      } else if(this.props.sort === 'unpopular') {
        postList = filteredPosts.sort((a, b) => {
          if(a.voteScore > b.voteScore) {
            return 1
          } else {
            return -1
          }
          return 0
        }).map(post => (<li key={post.id}><Post post={post} /></li>))
      } else if(this.props.sort === 'date') {
        postList = filteredPosts.sort((a, b) => {
          if(a.timestamp > b.timestamp) {
            return -1
          } else {
            return 1
          }
          return 0
        }).map(post => (<li key={post.id}><Post post={post} /></li>))
      }
    } 
    
    return( 
      
      <div>
      <Header 
          onHamburgerClick={this.onHamburgerClick} 
          hamburgerClicked={this.state.hamburgerClicked} />
        <div className="Container">
          <SideNav 
            sideNavClass={sideNavClass}/>
            <div className={postsClass.join(' ')}>

      <div className="Posts">
        <SortedBy />
        {filteredPosts.length > 0
        ? postList.length > 0 ? (<ul>{postList}</ul>) : (<div>Not Found</div>)
        : null
        }
      </div>
     </div>
     </div>
     </div>  
    )
  }
}


const mapStateToProps = (state) => {
  const{postsReducer,sortedReducer}=state
  return {
    posts: postsReducer.posts,
    sort:sortedReducer.sort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (data) => dispatch(getPosts(data)),
    deletePosts: () => dispatch(deletePosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)