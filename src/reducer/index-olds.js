import * as ActionType from '../action/ActionType'
import { combineReducers } from 'redux'


const modalinitialState = {
  postBody: '',
  isOpen: false,
 isSubmitDisabled :'true'
}

 function modalReducer (state = modalinitialState, action) {
  switch (action.type) {
    case ActionType.OPEN_MODAL :
      return {
        ...state,
        isOpen: true,
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

const initialPostsState = {
  //we don't have any post yet
  isFetching: true,
  error: '',
}

 function postsReducer (state = initialPostsState, action) {
  switch (action.type) {
    case ActionType.FETCHING_POST :
      return {
        ...state,
        isFetching: true,
      }
    case ActionType.ADD_POST :
    case ActionType.FETCHING_POST_SUCCESS :
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.post.postId]: action.post,
      }
    case ActionType.FETCHING_POST_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case ActionType.REMOVE_FETCHING :
      return {
        ...state,
        error: '',
        isFetching: false,
      }
    case ActionType.ADD_MULTIPLE_POSTS :
      return {
        ...state,
        ...action.posts,
      }
    default :
      return state
  }
}





const initialFeedState = {
  newPostsAvailable: false,
  newPostsToAdd: [],
  isFetching: false,
  error: '',
  postIds: [],
}

 function feedReducer (state = initialFeedState, action) {
  switch (action.type) {
    case ActionType.SETTING_FEED_LISTENER :
      return {
        ...state,
        isFetching: true,
      }
    case ActionType.SETTING_FEED_LISTENER_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case ActionType.SETTING_FEED_LISTENER_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
        postIds: action.postIds,
        newPostsAvailable: false,
      }
    case ActionType.ADD_NEW_POST_ID_TO_FEED :
      return {
        ...state,
        newPostsToAdd: [action.postId, ...state.newPostsToAdd],
        newPostsAvailable: true,
      }
    case ActionType.RESET_NEW_POSTS_AVAILABLE :
      return {
        ...state,
        postIds: [...state.newPostsToAdd, ...state.postIds],
        newPostsToAdd: [],
        newPostsAvailable: false,
      }
    default :
      return state
  }
}

export default combineReducers({
  feedReducer,
  postsReducer,
  modalReducer
})