import React, { PropTypes } from 'react'
import { default as ReactModal } from 'react-modal'
import {formatPost} from '../../helper/format'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import _ from 'lodash'




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

const { object, string, func, bool,array } = PropTypes
Modal.PropTypes = {
  postBody: string.isRequired,
  closeModal: func.isRequired,
  isOpen: bool.isRequired,
  isSubmitDisabled: bool.isRequired,
  openModal: func.isRequired,
  action:PropTypes.object.isRequired,
  updatePostBody: func.isRequired,
   categories: array.isRequired,
   createPost:func.isRequired,
   //title: string.isRequired,
   //author: string.isRequired,
   //post:object.isRequired,
   // contentLabel: string.isRequired,
    //postFanout:func.isRequired

} 

 export default function Modal (props)  {
//const { category, title,author, body } = props.post
  console.log('categories',props.categories)
  console.log('post',props.post)
    function submitPost () {
  //   //props.duckFanout(formatPost(props.postBody))
     console.log('post',props.postBody)
    
 }
    
 

  return (
    <span className='darkBtn' onClick={props.openModal}>
      Post
      <ReactModal style={modalStyles} isOpen={props.isOpen} onRequestClose={props.closeModal}>
        <div className='newPostTop'>
          <span>{'Compose new Post'}</span>
              
           <select className='ui dropdown'
             value=''
                  selected
                  onChange={e => props.updatePostBody(e.target.value)}
                  style={{color: '#00b200'}}>
          <option value=''>Select a Category</option>
          {_.map(props.categories, category => {

              return (
                <option value={category.name} key={category.name}>{category.name}</option>
              )
            }
          )}
        </select>
             
          <span onClick={props.closeModal} className='pointer'>{'X'}</span>
        </div>
   
  <div className='inputField'>
  <label>Title</label>
   <input value={props.title} onChange={submitPost}/>
   </div>
   <div className='inputField'>
   <label>Author</label>
   <input value={props.title} onChange={submitPost}/>
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
            Add Post
        </button>
      </ReactModal>
    </span>
  )

     }


