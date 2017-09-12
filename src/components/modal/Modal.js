import React, { PropTypes } from 'react'
import { default as ReactModal } from 'react-modal'
import {formatPost} from '../../helper/format'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getCategories } from '../../action/categoriesAction'
import { bindActionCreators } from 'redux'
import * as modalActionCreators from '../../action/modalAction'
import * as postsActionCreators from '../../action/postsAction'
import * as categoriesActionCreators from '../../action/categoriesAction'



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




 class  Modal extends  React.Component {
  
  componentDidMount() {  
    this.props.action.getCategories()
  }

  render() { 
//const { category, title,author, body } = props.post
  console.log('categories',this.props.categories)
  console.log('post',this.props.post)
    function submitPost () {
  //   //props.duckFanout(formatPost(props.postBody))
     console.log('post',this.props.postBody)
    
 }
    
 

  return (
    <span className='darkBtn' onClick={this.props.openModal}>
      Add Post
      <ReactModal style={modalStyles} isOpen={this.props.isOpen} onRequestClose={this.props.closeModal}>
        <div className='newPostTop'>
          <span>{'Compose new Post'}</span>
              
           <select className='ui dropdown'
             value=''
                  selected
                  onChange={e => this.props.updatePostBody(e.target.value)}
                  style={{color: '#00b200'}}>
          <option value=''>Select a Category</option>
          {_.map(this.props.categories, category => {

              return (
                <option value={category.name} key={category.name}>{category.name}</option>
              )
            }
          )}
        </select>
             
          <span onClick={this.props.closeModal} className='pointer'>{'X'}</span>
        </div>
   
  <div className='inputField'>
  <label>Title</label>
   <input value={this.props.title} onChange={submitPost}/>
   </div>
   <div className='inputField'>
   <label>Author</label>
   <input value={this.props.title} onChange={submitPost}/>
   </div>

        <div className='newPostInputContainer'>
          <textarea
          //when event click inoke the function passing  the value to the function
            onChange={(e) => this.props.updatePostBody(e.target.value)}
            value={this.props.postBody}
            maxLength={140}
            type='text'
            className='newPostInput'
            placeholder="What's your ideas?" />
        </div>
        <button
          className='submitPostBtn'
          disabled={this.props.isSubmitDisabled}
          onClick={submitPost}>
            Send Post
        </button>
      </ReactModal>
    </span>
  )

     }


 }

 function mapStateToProps (state,ownProps) {
  const { modalReducer,categoriesReducer,postsReducer} = state
  const postBodyLength = modalReducer.postBody.length
   
  return {
   
  postBody: modalReducer.postBody,
   isOpen: modalReducer.isOpen,
   isSubmitDisabled: postBodyLength <= 0 || postBodyLength > 140,
   categories:categoriesReducer.categories,
   //post: postsReducer.post
 


  
  }
}

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({...modalActionCreators,...categoriesActionCreators,...postsActionCreators}, dispatch)
    })

// const { object, string, func, bool,array } = PropTypes
   Modal.PropTypes = {
   postBody: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
   isSubmitDisabled: PropTypes.bool.isRequired,
   categories: PropTypes.array.isRequired,
    action:PropTypes.object.isRequired
//   closeModal: PropTypes.func.isRequired,
  
//   openModal: PropTypes.func.isRequired,
//   action:PropTypes.PropTypes.object.isRequired,
//   //updatePostBody: PropTypes.func.isRequired,
   
   
//    //title: string.isRequired,
//    //author: string.isRequired,
//    //post:object.isRequired,
//    // contentLabel: string.isRequired,
//     //postFanout:func.isRequired

 } 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)