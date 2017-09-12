import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  Modal  from './Modal'
import * as modalActionCreators from '../../action/modalAction'
import * as postsActionCreators from '../../action/postsAction'
import * as categoriesActionCreators from '../../action/categoriesAction'
import { createPost } from '../../action/postsAction'


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
   function mapDispatchToProps (dispatch) {
    return bindActionCreators({...modalActionCreators,...categoriesActionCreators,...postsActionCreators.createPost}, dispatch)
      // return{
      //   createPost: (post) => dispatch(createPost(post))
      // }
   } 

//  const mapDispatchToProps = dispatch => ({
//     action: bindActionCreators({...modalActionCreators,...categoriesActionCreators,...postsActionCreators}, dispatch)
// })
    
 

  

//ModalContainer hasn't any state
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

// export default connect(
//   mapStateToProps,
//   { createPost, updatePost, fetchCategories, fetchPost }
// )(Modal)