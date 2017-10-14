import * as ActionType from '../action/ActionType';
import initialState from './initialState'




//initialState.posts
export default function commentsReducer (state =initialState.postsReducer  ,action){
  //const { posts,id, timestamp, title,body,author,category,voteScore,deleted } = action
 
    //new state
  switch (action.type) {

case ActionType.LOAD_COMMENTS_FOR_POST :
         
      return Object.assign([], state, action.comments)


    case ActionType.ADD_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.comment]
        }
      }
    

default :
      return state
  }



  
}

