//import React, { PropTypes,Component } from 'react'
//import { getPost } from '../action/postAction'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { default as ReactModal } from 'react-modal'
import {formatPost} from '../../helper/format'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getCategories } from '../../action/categoriesAction'
//import { addPost } from '../../action/postsAction'
import { bindActionCreators } from 'redux'
import * as modalActionCreators from '../../action/modalAction'
import * as postsActionCreators from '../../action/postsAction'
import * as categoriesActionCreators from '../../action/categoriesAction'
import uuidv1 from 'uuid/v1'
import toastr from 'toastr'
import { Link ,Redirect   } from 'react-router-dom'


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

class Edit extends Component{

state = {
  id:'',
    title: '',
    author: '',
    body: '',
    category: '',
    
  }

  componentWillReceiveProps (nextProps) {
    const { id,title, author, body, category, voteScore } = nextProps.post
    //const{id}=nextProps.id
    this.state={id,title, author, body, category, voteScore}
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onBodyChange = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  onAuthorChange = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  onCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
    
  }

  onClickEdit = () => {
   const {id,title, category, author, body } = this.state
  
  this.props.action.editPost(id,{title,category,author,body})
                    .then(() =>{ toastr.success('Post edited successfully')})
                    .then(() =>{ (<Redirect to = '/posts' />)})
                    .catch(error => {toastr.error(error)}) 
 

    this.props.action.closeModal()
      
  }

  render() {
    console.log ('state',this.state)
    console.log('post is', this.props.post)
    //const NEW = 'new'
    return(
     <div className="Delete" onClick={() => this.props.action.openModal(this.props.id)} >
        edit
      <ReactModal style={modalStyles} isOpen={this.props.isOpen==this.props.id} onRequestClose={this.props.action.closeModal}>
        <div className='newPostTop'>
          <span>{'Compose new Post'}</span>
              
           <select className='ui dropdown'
             value={this.state.category}
                  selected
                  //onChange={this.onCategoryChange}
                   onChange={(e) => this.onCategoryChange(e)}
                  style={{color: '#00b200'}}>
          <option value=''>Select a Category</option>
          {_.map(this.props.categories, category => {

              return (
                <option value={category.name} key={category.name}>{category.name}</option>
              )
            }
          )}
        </select>
             
          <span onClick={this.props.action.closeModal} className='pointer'>{'X'}</span>
        </div>
   
  <div className='inputField'>
  <label>Title</label>
   <input  value={this.state.title}
           onChange={(e) => this.onTitleChange(e)}
    />
   </div>
   <div className='inputField'>
   <label>Author</label>
   <input value={this.state.author}  
          onChange={(e) => this.onAuthorChange(e)}
    />
   </div>

        <div className='newPostInputContainer'>
          <textarea
          //when event click inoke the function passing  the value to the function
            onChange={(e) => this.onBodyChange(e)}
            value={this.state.body}
            maxLength={140}
            type='text'
            className='newPostInput'
            placeholder="What's your ideas?" />
        </div>
       
        <button
          className='submitPostBtn'
         disabled={!(this.state.category&&this.state.author&&this.state.title&&this.state.body)}
          onClick={this.onClickEdit.bind(this)}
          >
            Send Post
        </button>
      </ReactModal>
      </div>
    )
  }
}

function mapStateToProps (state,ownProps) {
  const { modalReducer,categoriesReducer,postsReducer} = state
  const postBodyLength = modalReducer.postBody.length

   
  return {
   isOpen: modalReducer.isOpen,
   isSubmitDisabled: postBodyLength <= 0 || postBodyLength > 140,
   categories:categoriesReducer.categories,
   posts:postsReducer.posts,
  }
}

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({...modalActionCreators,...categoriesActionCreators,...postsActionCreators}, dispatch)
    })

const { object, string, func, bool,array } = PropTypes
   Edit.PropTypes = {
    isOpen: PropTypes.bool.isRequired,
   categories: PropTypes.array.isRequired,
    action:PropTypes.object.isRequired,
   closeModal: PropTypes.func.isRequired,
   openModal: PropTypes.func.isRequired,
   id:  PropTypes.object.isRequired,
   post:PropTypes.object.isRequired,

 } 


 export default connect(mapStateToProps, mapDispatchToProps)(Edit)



