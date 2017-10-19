import React, { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { getPost ,getPosts} from '../action/postsAction'
import { addComment } from '../action/commentsAction'
import { Link } from 'react-router-dom'
import uuidv1 from 'uuid/v1'
import '../../public/App.css'
import PostInfo from './PostInfo'
import CommentForm from './comments/CommentForm'
import CommentList from './comments/CommentList'

class PostDetail extends Component {
  state = {
    bodyComment: ''
  }


  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
    
  }
componentDidUpdate() {
    if(this.props.posts.length > 0 && !this.props.post) {
        this.props.history.push('/404');
    }
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
       {this.props.post && <PostInfo post={post} /> }
        <hr/>
       {this.props.post && <CommentForm
          bodyComment={this.state.bodyComment}
          onCommentSubmit={this.onCommentSubmit}
          onInputChange={this.onInputChange} /> }
        <hr/>
        {this.props.post && <CommentList comments={this.props.post.comments} />}
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
    posts:postsReducer.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(getPost(id)),
    getPosts: () => dispatch(getPosts()),
    addComment:(comment)=>dispatch(addComment(comment))
  }
}

PostDetail.propTypes = {
    
    history: PropTypes.object,
  
};


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)