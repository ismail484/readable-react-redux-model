import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../action/postsAction'
import { addComment } from '../action/commentsAction'
import { Link } from 'react-router-dom'
import uuidv1 from 'uuid/v1'
import '../../public/App.css'
import {PostInfo} from './PostInfo'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

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
     if (this.state.bodyComment) {
    const newComment = {
      id: uuidv1(),
      timestamp: Date.now(),
      body: this.state.bodyComment,
      author: this.props.post.author,
      parentId: this.props.post.id
    } 
    // POST new comment
    this.props.addComment(newComment)
    .then(() => {
          this.setState({
            bodyComment: ''
          })
  })
  
}//end od if
  }//end of onCommentSubmit

  render() {

       console.log('post is',this.props.post)
    const { id } = this.props.match.params
    const { post } = this.props
        
    return(
      <div className="PostDetail">
        <PostInfo post={post} />
        <hr/>
        <CommentForm
          bodyComment={this.state.bodyComment}
          onCommentSubmit={this.onCommentSubmit}
          onInputChange={this.onInputChange} />
        <hr/>
        <CommentList comments={this.props.post.comments} />
        <hr/>
          <Link to={`/posts`}>Back to Home Page</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    const {postsReducer,commentsReducer}=state
  return {
    post: postsReducer.post,
    // comment:commentsReducer.comment
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(getPost(id)),
    addComment:(comment)=>dispatch(addComment(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)