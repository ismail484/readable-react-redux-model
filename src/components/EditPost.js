import React, { PropTypes,Component } from 'react'
//import { getPost } from '../action/postAction'
import { default as ReactModal } from 'react-modal'
import {formatPost} from '../helper/format'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getCategories } from '../action/categoriesAction'
//import { addPost } from '../../action/postsAction'
import { bindActionCreators } from 'redux'
import * as modalActionCreators from '../action/modalAction'
import * as postsActionCreators from '../action/postsAction'
import * as categoriesActionCreators from '../action/categoriesAction'
import uuidv1 from 'uuid/v1'
import toastr from 'toastr'

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


class EditPost extends Component {

  state = {
    title: '',
    author: '',
    body: '',
    category: ''
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.action.getPost(id)
      .then(() => {
        const { title, author, body, category, voteScore } = this.props.post.
        console.log(category)
        this.setState({
          title,
          author,
          body,
          category
        })
      })
  
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

  onEditClick = () => {
    /*TODO Validation*/
    /* Call API to edit the post*/
  }

  render() {
    return(
      
      <ReactModal style={modalStyles} isOpen={this.props.isOpen} onRequestClose={this.props.action.closeModal}>
        <div className='newPostTop'>
          <span>{'Compose new Post'}</span>
              
           <select className='ui dropdown'
             value={this.state.category}
                  selected
                  onChange={this.onCategoryChange}
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
          onClick={this.onPostClick.bind(this)}
          >
            Send Post
        </button>
      </ReactModal>
 
    )
  }
}

function mapStateToProps (state,ownProps) {
  const { modalReducer,categoriesReducer,postsReducer} = state
  const postBodyLength = modalReducer.postBody.length
   
  return {
   
  //postBody: modalReducer.postBody,
   isOpen: modalReducer.isOpen,
   isSubmitDisabled: postBodyLength <= 0 || postBodyLength > 140,
   categories:categoriesReducer.categories,
   posts:postsReducer.posts,
   post: postsReducer.post
 


  
  }
}

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({...modalActionCreators,...categoriesActionCreators,...postsActionCreators}, dispatch)
    })

const { object, string, func, bool,array } = PropTypes
   EditPost.PropTypes = {
   postBody: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
   isSubmitDisabled: PropTypes.bool.isRequired,
   categories: PropTypes.array.isRequired,
    action:PropTypes.object.isRequired,
   closeModal: PropTypes.func.isRequired,
   history: PropTypes.object.isRequired,
   openModal: PropTypes.func.isRequired,


 } 



export default connect(mapStateToProps, mapDispatchToProps)(EditPost)