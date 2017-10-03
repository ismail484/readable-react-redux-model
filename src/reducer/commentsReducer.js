import * as ActionType from '../action/ActionType';
import initialState from './initialState'




//initialState.posts
export default function commentsReducer (state =initialState.commentsReducer  ,action){
  //const { posts,id, timestamp, title,body,author,category,voteScore,deleted } = action
 
    //new state
  switch (action.type) {

case ActionType.LOAD_COMMENTS_FOR_POST :
         
      return Object.assign([], state, action.comments)
    


default :
      return state
  }
}

