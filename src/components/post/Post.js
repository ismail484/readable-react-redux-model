import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost, downVotePost, upVotePost,editPost,getPost } from '../../action/postsAction'
import { Title } from './Title'
import { Author } from './Author'
import { Comments } from './Comments'
import  Voting  from '../Voting/'
import  Edit  from './Edit'
import { Delete } from './Delete'
import { Count } from './Count'
import {getAllComments} from '../../action/commentsAction'
import Body from './Body'
import toastr from 'toastr'


class Post extends Component {
  // state = {
  //   score: 0
  // }

   componentDidMount() {

    // const { voteScore } = this.props.post
    // this.setState({
    //   score: voteScore
    // })
  }

  //  onClickEdit = (id,post) => {
  //  this.props.editPost(id,post)
  //  }

  onClickDelete = (id) => {
    this.props.deletePost(id)
    .then(() =>{ toastr.success('Post deleted successfully')
                    }).catch(error => {
                toastr.error(error);
            }); 
  }

  onClickUpVote = (id) => {
    this.props.upVotePost(id)
    // this.setState({
    //   score: this.state.score + 1
    // })
  }

  onClickDownVote = (id) => {
    this.props.downVotePost(id)
    // this.setState({
    //   score: this.state.score - 1
    // })
  }

 

  render() {
    const { body,voteScore, title, author, id } = this.props.post
    // const { score } = this.state
    const posts = this.props.posts
    const index= posts.findIndex(post => post.id === id)
    const count = posts[index].comments 
                  ? posts[index].comments.length
                  : '&'

    return(  
      <div className="Post">
        <Voting 
          id={id}
          score={voteScore}
          onClickDownVote={this.onClickDownVote}
          onClickUpVote={this.onClickUpVote} />
        <div className="Title-PostInfo-Container">
          <div className="Title-PostInfo">
            <Title 
              post={this.props.post} />
            <div className="PostInfo">
              <Author author={author} />
             <Edit id={id} 
             post={this.props.post}
              /> 
              <Delete id={id} onClickDelete={this.onClickDelete}/>
              <Count count={count} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const{postsReducer}=state
  return {
    posts: postsReducer.posts,
    //post:postsReducer.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // editPost: (id,post) => dispatch(editPost(id,post)),
    deletePost: (id) => dispatch(deletePost(id)),
    upVotePost: (id) => dispatch(upVotePost(id)),
    downVotePost: (id) => dispatch(downVotePost(id)),
    //getPost:(id) => dispatch(getPost(id)),
    
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)