import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  Modal  from './Modal'
import * as modalActionCreators from '../../action/modalAction'
import * as postActionCreators from '../../action/postsAction'


function mapStateToProps (modalReducer) {
  const postBodyLength = modalReducer.postBody.length
  return {
   
    postBody: modalReducer.postBody,
    isOpen: modalReducer.isOpen,
    isSubmitDisabled: postBodyLength <= 0 || postBodyLength > 140,
   //isSubmitDisabled:null
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({...modalActionCreators,...postActionCreators}, dispatch)
}

//ModalContainer hasn't any state
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)