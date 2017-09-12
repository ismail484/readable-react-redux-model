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

class Post extends Component {
  state = {
    voteScore: 0
  }

  onClickDelete = (id) => {
    this.props.deletePost(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
    this.setState({
      voteScore: this.state.voteScore + 1
    })
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
    this.setState({
      voteScore: this.state.voteScore - 1
    })
  }

  componentDidMount() {
    const { voteScore } = this.props.post
    this.setState({
      voteScore: voteScore
    })
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
          <Comments />
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

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    upVote: (id) => dispatch(upVotePost(id)),
    downVote: (id) => dispatch(downVotePost(id))
  }
}

export default connect(null, mapDispatchToProps)(Post)