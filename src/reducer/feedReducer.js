import * as ActionType from '../action/ActionType'
import initialState from './initialState'



export default function feedReducer (state = initialState.feedReducer, action) {
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