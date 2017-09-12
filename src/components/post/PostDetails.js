import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPost } from '../../action/postsAction'
import CommentsList from './CommentsList'

class PostDetail extends Component {
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.loadPost(id)
  }

  render() {
    const { id } = this.props.match.params
    const { category, title,author, body, voteScore } = this.props.post
    return(
      <div>
        <p>{author}</p>
        <p>{body}</p>
        <p>{category}</p>
        <p>{title}</p>
        <p>{voteScore}</p>
        <CommentsList id={id}/>
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
    loadPost: (id) => dispatch(loadPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
