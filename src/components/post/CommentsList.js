import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadcommentsForPost } from '../../action/commentsAction'



class Comments extends Component {

  componentDidMount() {
    this.props.loadcommentsForPost(this.props.id)
  }

  render() {
    const { comments } = this.props
    const commentsList = comments.map(comment => <li key={comment.id}>{comment.body}</li>)
    return(
      <div className="Comments">
        <ul>
          {commentsList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    const {commentsReducer}=state
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadcommentsForPost: (id) => dispatch(loadcommentsForPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)