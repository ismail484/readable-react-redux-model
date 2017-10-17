import * as ActionType from '../action/ActionType'
import initialState from './initialState'
import get from 'lodash/fp/get'
import set from 'lodash/fp/set'
import flow from 'lodash/fp/flow'



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


case ActionType.REMOVE_POST: 
      return {
        ...state, 
        post: { }
      }

      
case ActionType.DELETE_POSTS :
      return {
        posts: []
    }

//     get will get a certain property/path from an object or array, and set will set a certain property/path in an object or array, except it won't change the original object
// And that's the key here -- immutability

    case ActionType.UP_VOTE_POST:
  const upVotePosts = get('posts', state) // basically same as state.posts
  const indexUp= upVotePosts.findIndex(post => post.id === action.id) // same as before
  const upVotePostsScore = get([indexUp, 'voteScore'], upVotePosts) // gets the vote score
  const up = set([indexUp, 'voteScore'], upVotePostsScore + 1, upVotePosts) // this sets the post voteScore to 1 more than it originally was, without changing the original value
  return flow( // flow is a way to chain functions together, it's a shortcut for set('post, c[indexUp], set('posts', c, state))
    set('posts', up), // sets the 'posts' property of state to c, _immutably_
    set('post', up[indexUp]) // sets the 'post' property of state to c[indexUp], immutably 
  )(state)

// case ActionType.UP_VOTE_POST:
//       const currentPostUpVote = [...state.posts]
//       const indexUp= currentPostUpVote.findIndex(post => post.id === action.id)
//       currentPostUpVote[indexUp].voteScore = currentPostUpVote[indexUp].voteScore + 1
//       // return {
//       //   posts: [...currentPostUpVote]
//       // }

 case ActionType.DOWN_VOTE_POST:
  const downVotePosts = get('posts', state) // basically same as state.posts
  const indexDown= downVotePosts.findIndex(post => post.id === action.id) // same as before
  const downVotePostsScore = get([indexDown, 'voteScore'], downVotePosts) // gets the vote score
  const down = set([indexDown, 'voteScore'], downVotePostsScore - 1, downVotePosts) // this sets the post voteScore to 1 more than it originally was, without changing the original value
  return flow( // flow is a way to chain functions together, it's a shortcut for set('post, c[indexUp], set('posts', c, state))
    set('posts', down), // sets the 'posts' property of state to c, _immutably_
    set('post', down[indexDown]) // sets the 'post' property of state to c[indexUp], immutably 
  )(state)



// case ActionType.DOWN_VOTE_POST:
   
//     const currentPostDownVote = [...state.posts]
//       const indexDown= currentPostDownVote.findIndex(post => post.id === action.id)
//       currentPostDownVote[indexDown].voteScore = currentPostDownVote[indexDown].voteScore - 1
//       // return {
//       //   posts: [...currentPostDownVote]
//       // }



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




      case ActionType.UP_VOTE_COMMENT:
      const upVoteComments = [...state.post.comments]
      const indexUpComment = upVoteComments.findIndex(comment => comment.id === action.id)
      const upVoteScore = action.voteScore
      const newUpScore = Object.assign({}, upVoteComments[indexUpComment], { 
        voteScore: upVoteScore 
      })
      return {
        ...state, 
        post: {
          ...state.post, 
          comments: [...upVoteComments.slice(0, indexUpComment),
          newUpScore, ...upVoteComments.slice(indexUpComment + 1)]
        }
      }
    case ActionType.DOWN_VOTE_COMMENT:
      const downVoteComments = [...state.post.comments]
      const indexDownComment = downVoteComments.findIndex(comment => comment.id === action.id)
      const downVoteScore = action.voteScore
      const newDownScore = Object.assign({}, downVoteComments[indexDownComment], { 
        voteScore: downVoteScore 
      })
      return {
        ...state, 
        post: {
          ...state.post, 
          comments: [...downVoteComments.slice(0, indexDownComment),
          newDownScore, ...downVoteComments.slice(indexDownComment + 1)]
        }
      }


default :
      return state
  }
}

