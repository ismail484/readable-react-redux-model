import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../action/postsAction'

class PostDetail extends Component {
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  render() {
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
        <p>{author}</p>
        <p>{body}</p>
        <p>{category}</p>
        <p>{title}</p>
        <p>{voteScore}</p>
        <ul>{commentList}</ul>
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