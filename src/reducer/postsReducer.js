import * as ActionType from '../action/ActionType';
import initialState from './initialState'





//initialState.posts
export default function postsReducer (state =initialState.postsReducer,action){
  
    //new state
  switch (action.type) {

    case ActionType.GET_POSTS :
    action.post.comments = action.comments

       return {
        ...state,
         posts: [...state.posts, action.post]
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
      
      const currentPost = [...state.posts]
      const indexToDelete = currentPost.findIndex(post => post.id === action.id)
      return {
        posts: [...currentPost.slice(0, indexToDelete), 
        ...currentPost.slice(indexToDelete + 1)]
      }


case ActionType.UP_VOTE_POST:
      const currentPostUpVote = [...state.posts]
      const indexUp= currentPostUpVote.findIndex(post => post.id === action.id)
      currentPostUpVote[indexUp].voteScore = currentPostUpVote[indexUp].voteScore + 1
      return {
        posts: [...currentPostUpVote]
      }


case ActionType.DOWN_VOTE_POST:
   
    const currentPostDownVote = [...state.posts]
      const indexDown= currentPostDownVote.findIndex(post => post.id === action.id)
      currentPostDownVote[indexDown].voteScore = currentPostDownVote[indexDown].voteScore - 1
      return {
        posts: [...currentPostDownVote]
      }

case ActionType.GET_POSTS_FOR_CATEGORY:
      return {
        ...state,
        posts: action.posts
      }


default :
      return state
  }
}

