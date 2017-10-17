import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link ,Redirect   } from 'react-router-dom'
import Voting from './Voting/'
import {removePost,upVotePost, downVotePost} from '../action/postsAction'
import { getCategories} from '../action/categoriesAction'
import  Edit  from './post/Edit'
import { Delete } from './post/Delete'
import toastr from 'toastr'
import moment from 'moment'


class PostInfo extends Component {
  

componentDidMount() { 
 
    this.props.getCategories()
  }

 state = {
    deleted: false
  }


  onClickDelete = (id) => {
    this.props.removePost(id)
    .then(() => {
        this.setState({
          deleted: true
        })
      })
    .then(() =>{ toastr.success('Post deleted') })
    .catch(error => {toastr.error(error)}) 
  }

  onClickUpVote = (id) => {
    this.props.upVotePost(id)
    
  }

  onClickDownVote = (id) => {
    this.props.downVotePost(id)
    
  }


  render() {

    const { id, author, body, category, title, voteScore, timestamp } = this.props.post

    console.log('voteScore',voteScore)
    console.log('title',title)
    if (this.state.deleted) {
      return (<Redirect to='/posts' />)
    }else{
    return(
      <div className="Post-Info">
        <div className="Post-Info-Vote">
           <Voting 
            id={id}
            score={voteScore}
            onClickUpVote={this.onClickUpVote} 
            onClickDownVote={this.onClickDownVote} /> 
        </div>
        <div className="Post-Info-Container">
          <div className="Post-Info-Title">
            <h3>{title}</h3>
          </div>
          <div className="Post-Info-Time-Author">
            <span><b>Posted on</b> {moment(timestamp).toString()} by <b>{author}</b></span>
          </div>
          <div className="Post-Info-Body">
            <p>{body}</p>
          </div>
          <div className="Post-Info-Category-Container">
            <div className="Post-Info-Category">
              <span><b>Category: </b>{category}</span>
            </div>
            <div className="Post-Info-Edit">
              <Edit id={id} 
                    post={this.props.post}
                    categories={this.props.categories}

              />
            </div>
            <div className="Post-Info-Delete">
               <Delete id={id} onClickDelete={this.onClickDelete}/>
            </div>
          </div>
        </div>
      </div>
    )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVotePost: (id) => dispatch(upVotePost(id)),
    downVotePost: (id) => dispatch(downVotePost(id)) ,
    removePost: (id)=>  dispatch(removePost(id)),
    getCategories: ()=>  dispatch(getCategories()),

  }
}

export default connect(null, mapDispatchToProps)(PostInfo)