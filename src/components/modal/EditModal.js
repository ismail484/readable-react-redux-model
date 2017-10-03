import React, { PropTypes } from 'react'
import { default as ReactModal } from 'react-modal'
import {formatPost} from '../../helper/format'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getCategories } from '../../action/categoriesAction'
import { addPost } from '../../action/postsAction'
import { bindActionCreators } from 'redux'
import * as modalActionCreators from '../../action/modalAction'
import * as postsActionCreators from '../../action/postsAction'
import * as categoriesActionCreators from '../../action/categoriesAction'
import uuidv1 from 'uuid/v1'



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




 class  EditModal extends  React.Component {
  
  componentDidMount() { 
    const { id } = this.props.match.params
    this.props.action.getPost(id)
    this.props.action.getCategories();
   
    
  }

state = {
    title: '',
    category: '',
    author: '',
    body: '',
    id:''
  }

   reset= (timestamp,title,category,author,body)=>this.setState({title: '',category:'',author:'',body:''})


onPostClick() {
  var self=this
    const { title, category, author, body,id } = self.state
    const post = {
      id,
      timestamp: Date.now(),
      title,
      category,
      author,
      body
    }
    
  this.props.action.editPost(post,id)
  //self.props.action.getPosts()
   //this.props.action.getPosts()
   // self.componentDidMount.getPostsAgain()
  self.reset()
    self.props.action.closeModal()
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  onAuthorChange(e) {
    this.setState({ author: e.target.value })
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value })
  }

  onCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
    
  }




  render() { 
      const {  id,author, body, category, title, voteScore } = this.props.post
//       this.setState{{
//         id:id ,    
//     title: title,
//     category: category,
//     author: author,
//     body: body,
//   }}
   console.log('categories',this.props.categories)
  return (
   
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
   posts:postsReducer.posts
   //post: postsReducer.post
 


  
  }
}

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({...modalActionCreators,...categoriesActionCreators,...postsActionCreators}, dispatch)
    })

 const { object, string, func, bool,array } = PropTypes
   EditModal.PropTypes = {
    isOpen: PropTypes.bool.isRequired,
   isSubmitDisabled: PropTypes.bool.isRequired,
   categories: PropTypes.array.isRequired,
    action:PropTypes.object.isRequired,
   closeModal: PropTypes.func.isRequired,
   post:PropTypes.object.isRequired,
 // post:PropTypes.object.isRequired,
   openModal: PropTypes.func.isRequired,
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
)(EditModal)