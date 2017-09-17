import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost, downVotePost, upVotePost } from '../../action/postsAction'
import { Title } from './Title'
import { Author } from './Author'
import { Comments } from './Comments'
import { Score } from './Score'
import { Voting } from './Voting'
import { Edit } from './Edit'
import { Delete } from './Delete'
import { Count } from './Count'
import {getAllComments} from '../../action/commentsAction'
class Post extends Component {
  state = {
    voteScore: 0
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

  componentDidMount() {
        this.props.getAllComments('posts', this.props.post.id)

    const { voteScore } = this.props.post
    this.setState({
      voteScore: voteScore
    })

    const posts = this.props.posts
    const index= posts.findIndex(post => post.id === this.props.post.id)
    const count = posts[index].comments 
                  ? posts[index].comments.length
                  : '&'
  }

  render() {
    const { body, title, author, id } = this.props.post
    const { voteScore } = this.state

    return(  
      <div className="Post">
        <Title 
          post={this.props.post} />
        <div className="Post-Info">
          <Author author={author} />
          <Count count={this.count} />
          <Score voteScore={voteScore} />
          <Voting 
            id={id} 
            onClickDownVote={this.onClickDownVote}
            onClickUpVote={this.onClickUpVote} />
          <Edit />
          <Delete id={id} onDeleteClick={this.onDeleteClick}/>
        </div>
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
    deletePost: (id) => dispatch(deletePost(id)),
    upVotePost: (id) => dispatch(upVotePost(id)),
    downVotePost: (id) => dispatch(downVotePost(id)),
    getAllComments: (from, id) => dispatch(getAllComments(from, id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)