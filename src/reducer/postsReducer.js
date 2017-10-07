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
        posts: [...state.posts, action.post]
      }
         
 case ActionType.EDIT_POST :
      const currentEditPost = [...state.posts]
      const indexEdit = currentEditPost.findIndex(post => post.id === action.id)
      const { title, category, body, author } = action.post
      const newPostToEdit = Object.assign({}, currentEditPost[indexEdit], {
        title,
        category,
        author,
        body,
        
      })
      return {
        posts: [...currentEditPost.slice(0, indexEdit),
        newPostToEdit, ...currentEditPost.slice(indexEdit + 1)]
      }


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
case ActionType.DELETE_POSTS :
      return {
        posts: []
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


  case ActionType.DELETE_COMMENT:
      const comments = [...state.post.comments]
      const indexComment = comments.findIndex(comment => comment.id === action.id)
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...comments.slice(0, indexComment), 
          ...comments.slice(indexComment + 1)]
        }
      }



      case ActionType.EDIT_COMMENT:
      const editComments = [...state.post.comments]
      const indexEditComment = editComments.findIndex(comment => comment.id === action.id)
    //  const { body, timestamp } = action.comment
      const newCommentToEdit = Object.assign({}, editComments[indexEditComment],  
        action.comment
      )
      return {
        ...state, 
        post: {
          ...state.post, 
          comments: [...editComments.slice(0, indexEditComment),
          newCommentToEdit, ...editComments.slice(indexEditComment + 1)]
        }
      }

default :
      return state
  }
}

