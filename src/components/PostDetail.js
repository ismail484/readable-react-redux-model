import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../action/postsAction'
import { addComment } from '../action/commentsAction'
import { Link } from 'react-router-dom'
import uuidv1 from 'uuid/v1'
import '../../public/App.css'

class PostDetail extends Component {
  state = {
    bodyComment: ''
  }
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  onInputChange = (e) => {
    this.setState({
      bodyComment: e.target.value
    })
  }

  onCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: uuidv1(),
      timestamp: Date.now(),
      body: this.state.bodyComment,
      author: this.props.post.author,
      parentId: this.props.post.id
    } 

    // POST new comment
    this.props.addComment(newComment)
  }

  render() {

  
    console.log('post is',this.props.post)
    const { id } = this.props.match.params
    const { author, body, category, title, voteScore } = this.props.post
    let commentList = null
    if (this.props.post.comments) {
      commentList = this.props.post.comments.map(comment => {
        return (<li key={comment.id}>{comment.body}</li>)
      })
    }

    return(
      <div className="PostDetail">
        <p>{author}</p>
        <p>{body}</p>
        <p>{category}</p>
        <p>{title}</p>
        <p>{voteScore}</p>
        <hr/>
        
        <form onSubmit={this.onCommentSubmit}>
          <input
            onChange={this.onInputChange} 
            value={this.state.bodyComment}
            type="text"/>
          <input type="submit"/>
        </form>

        <ul>{commentList}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    const {postsReducer,commentsReducer}=state
  return {
    post: postsReducer.post,
    comment:commentsReducer.comment
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(getPost(id)),
    addComment:(comment)=>dispatch(addComment(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)