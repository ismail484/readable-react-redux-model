import React, { Component } from 'react'
import { connect } from 'react-redux'



export class Voting extends Component {

  render() {
    return(
      <div className="Voting">
        <UpVoting {...this.props} />
        <DownVoting {...this.props} />
      </div>
    )
  }
}

const UpVoting = (props) => {
  return(
    <div 
      className="UpVoting"
      onClick={() => props.onClickUpVote(props.id)}>
    </div>
  )
}

const DownVoting = (props) => {
  return(
    <div 
      className="DownVoting"
      onClick={() => props.onClickDownVote(props.id)}>
    </div>
  )
}