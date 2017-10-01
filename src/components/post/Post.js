import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost, downVotePost, upVotePost,editPost,getPost } from '../../action/postsAction'
import { Title } from './Title'
import { Author } from './Author'
import { Comments } from './Comments'
import { Score } from './Score'
import { Voting } from './Voting'
import  Edit  from './Edit'
import { Delete } from './Delete'
import { Count } from './Count'
import {getAllComments} from '../../action/commentsAction'
import Body from './Body'
import EditModal from '../modal/EditModal'

class Post extends Component {
  state = {
    voteScore: 0
  }

   componentDidMount() {

    const { voteScore } = this.props.post
    this.setState({
      voteScore: voteScore
    })
  }

   onClickEdit = (id,post) => {
   this.props.editPost(id,post)
   }

  onClickDelete = (id) => {
    this.props.deletePost(id)
  }

  onClickUpVote = (id) => {
    this.props.upVotePost(id)
    this.setState({
      voteScore: this.state.voteScore + 1
    })
  }

  onClickDownVote = (id) => {
    this.props.downVotePost(id)
    this.setState({
      voteScore: this.state.voteScore - 1
    })
  }

 

  render() {
    const { body, title, author, id } = this.props.post
    const { voteScore } = this.state
    const posts = this.props.posts
    const index= posts.findIndex(post => post.id === id)
    const count = posts[index].comments 
                  ? posts[index].comments.length
                  : '&'

    return(  
      <div className="Post">
        <Title 
          post={this.props.post} />
          {/* <Body body={body} /> */}
        <div className="Post-Info">
          <Author author={author} />
          <Count count={this.count} />
          <Score voteScore={voteScore} />
          <Voting 
            id={id} 
            onClickDownVote={this.onClickDownVote}
            onClickUpVote={this.onClickUpVote} />
           <Edit id={id} 
                post={this.props.post}
                onClickEdit={this.onClickEdit} />
          <Delete id={id} 
                  onClickDelete={this.onClickDelete}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const{postsReducer}=state
  return {
    posts: postsReducer.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     editPost: (id,post) => dispatch(editPost(id,post)),
    deletePost: (id) => dispatch(deletePost(id)),
    upVotePost: (id) => dispatch(upVotePost(id)),
    downVotePost: (id) => dispatch(downVotePost(id)),
    
   

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)