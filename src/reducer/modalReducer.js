import * as ActionType from '../action/ActionType'
import initialState from './initialState'



export default function modalReducer (state = initialState.modalReducer, action) {
  switch (action.type) {
    case ActionType.OPEN_MODAL :
    const {New}=action
      return {
        ...state,
       // isOpen: true,
       isOpen:action.payload
      }
    case ActionType.CLOSE_MODAL :
      return {
        postBody: '',
        isOpen: false,
      }
    case ActionType.UPDATE_POST_BODY :
      return {
        ...state,
        postBody: action.newPostBody,
      }
    default :
      return state
  }
}



