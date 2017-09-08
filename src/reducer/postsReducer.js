import * as ActionType from '../action/ActionType';
import initialState from './initialState'



export default function postsReducer (state = initialState.postsReducer, action) {
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
        //add specific post to post state in redux
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

// export function duckFanout (duck) {
//   return function (dispatch, getState) {
//     //const uid = getState().users.authedId
//     saveDuck(duck)
//       .then((duckWithID) => {
//         dispatch(addDuck(duckWithID))
//         dispatch(closeModal())
//       })
//       .catch((err) => {
//         console.warn('Error in duckFanout', err)
//       })
//   }
// }