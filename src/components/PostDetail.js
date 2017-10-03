import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../action/postsAction'
import { Link } from 'react-router-dom'

class PostDetail extends Component {
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  render() {
    console.log('post is',this.props.post)
    const { id } = this.props.match.params
    const { author, body, category, title, voteScore } = this.props.post
    let commentList = null
    if (this.props.post.comments) {
      commentList = this.props.post.comments.map(comment => {
        return (<li>{comment.body}</li>)
      })
    }

    return(
      <div>
        <p>Author : {author}</p>
        <p> Body: {body}</p>
        <p>Category {category}</p>
        <p>title {title}</p>
        <p>VoteScore: {voteScore}</p>
        <ul>Comments {commentList}</ul>
        <Link to={'/posts'}>Back to All Posts</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    const {postsReducer}=state
  return {
    post: postsReducer.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(getPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)