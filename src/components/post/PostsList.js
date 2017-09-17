import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../action/postsAction'
import { Voting } from './Voting'
import * as ActionType from '../../action/ActionType'
import Post from './Post'

class PostsList extends Component {

  componentDidMount() {
    this.props.getPosts()
    
  }

  render() {
    const { posts, match } = this.props
    console.log('posts are',posts)
    let filteredPosts = posts.filter(post => {
      if(match.params.category) {
        return !post.deleted && post.category === match.params.category
      } else {
        return !post.deleted 
      }
    })
    let postList
    if (filteredPosts.length > 0) {
      postList = filteredPosts.map(post => (<li key={post.id}><Post post={post} /></li>))
    }

    return(
      <div className="Posts">
        {filteredPosts.length > 0
        ? postList.length > 0 ? (<ul>{postList}</ul>) : (<div>Not Found</div>)
        : (<h1>...</h1>)
        }
      </div>
    )
   }
  }


const mapStateToProps = (state) => {
  const{postsReducer}=state
  return {
    posts: postsReducer.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (data) => dispatch(getPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)