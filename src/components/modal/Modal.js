import React, { PropTypes } from 'react'
import { default as ReactModal } from 'react-modal'
import {formatPost} from '../../helper/format'


const modalStyles = {
  content: {
    width: 350,
    margin: '0px auto',
    height: 220,
    borderRadius: 5,
    background: '#EBEBEB',
    padding: 0,
  },
}

const { object, string, func, bool } = PropTypes
Modal.propTypes = {
  postBody: string.isRequired,
  closeModal: func.isRequired,
  isOpen: bool.isRequired,
  isSubmitDisabled: bool.isRequired,
  openModal: func.isRequired,
  updatePostBody: func.isRequired,
   // contentLabel: string.isRequired,
    //postFanout:func.isRequired

} 

export default function Modal (props) {
  function submitPost () {
    //props.duckFanout(formatPost(props.postBody))
    console.log('post', props.postBody)
    
  }

  return (
    <span className='darkBtn' onClick={props.openModal}>
      Post
      <ReactModal style={modalStyles} isOpen={props.isOpen} onRequestClose={props.closeModal}>
        <div className='newPostTop'>
          <span>{'Compose new Post'}</span>
          <span onClick={props.closeModal} className='pointer'>{'X'}</span>
        </div>
        <div className='newPostInputContainer'>
          <textarea
          //when event click inoke the function passing  the value to the function
            onChange={(e) => props.updatePostBody(e.target.value)}
            value={props.postBody}
            maxLength={140}
            type='text'
            className='newPostInput'
            placeholder="What's your ideas?" />
        </div>
        <button
          className='submitPostBtn'
          disabled={props.isSubmitDisabled}
          onClick={submitPost}>
            {'Post'}
        </button>
      </ReactModal>
    </span>
  )
}