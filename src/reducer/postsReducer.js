import * as ActionType from '../action/ActionType';
import initialState from './initialState'





//initialState.posts
export default function postsReducer (state =initialState.postsReducer,action){
  //const { posts,id, timestamp, title,body,author,category,voteScore,deleted } = action
 
    //new state
  switch (action.type) {

    case ActionType.GET_POSTS :
    action.post.comments = action.comments
         
       return {
        ...state,
         posts: [...initialState.postsReducer.posts, action.post]
      }
        
    case ActionType.ADD_POST :
    
      return {
        ...state,
        post:action.post
      }
         
 case ActionType.EDIT_POST :
      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post)
      ]



    case ActionType.GET_POST :
      action.post.comments = action.comments
      return {
        ...state, 
        post: action.post
      }



case ActionType.DELETE_POST :
      const newState = Object.assign([], state)
      const indexOfPostToDelete = state.findIndex(post => post.id == action.post.id)
      newState.splice(indexOfPostToDelete, 1);
      return newState


case ActionType.UP_VOTE_POST:
    const newState1 = Object.assign([], state)
    const indexOfPostUp = state.findIndex(post => post.id == action.post.id)
    newState1[indexOfPostUp].voteScore=state[indexOfPostUp]+1
    return newState1
    
case ActionType.DOWN_VOTE_POST:
    const newState2 = Object.assign([], state)
    const indexOfPostDown = state.findIndex(post => post.id == action.post.id)
    newState2[indexOfPostDown].voteScore=state[indexOfPostDown]+1
    return newState2

case ActionType.GET_POSTS_FOR_CATEGORY:
      return {
        ...state,
        posts: action.posts
      }


default :
      return state
  }
}

