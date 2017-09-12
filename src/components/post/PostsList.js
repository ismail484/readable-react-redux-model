import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../../action/postsAction'
import { Voting } from './Voting'
import * as ActionType from '../../action/ActionType'


import Post from './Post'

class PostsList extends Component {

  componentDidMount() {
    this.props.loadPosts()
  }

  render() {
    const { posts, match } = this.props
    console.log('props',posts)
    const postsList = posts.filter(post => {
      if(match.params.category) {
        return !post.deleted && post.category === match.params.category
      } else {
        return !post.deleted 
      }
    })
    .map(post => (<li key={post.id}><Post post={post} /></li>))

    return(
      <div className="Posts">
        {postsList.length > 0
        ? (
          <ul>
            {postsList}
          </ul>
        )
        : (<div>Not Found</div>)
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
    loadPosts: (data) => dispatch(loadPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)