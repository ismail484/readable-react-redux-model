import * as ActionType from './ActionType'
import * as PostsApi from '../api/PostsApi';
import * as CommentsApi from '../api/CommentsApi';




//wrapping all actions in action creators functions
//it takes an object (all payloads to setup the event)
//  /posts

// /posts
export function getPostsSuccess(post,comments) {
  return {
     type: ActionType.GET_POSTS,
     post,
     comments
   }
 }

export const getPosts = () => dispatch => (
  PostsApi.getAllPosts()
    .then(posts => {
      posts.map(post => {
        CommentsApi.getAllComments(post.id)
          .then(comments => {
            dispatch(getPostsSuccess(post,comments))
          })
      })
    })
)

//get posts/:id
export function getPostSuccess(post,comments) {
  return {
     type: ActionType.GET_POST,
     post,
     comments
   }
 }

 export const getPost = (id) => dispatch => (
   PostsApi.getPost(id)
     .then(post => {
     CommentsApi.getAllComments(post.id)
         .then(comments => {
           dispatch(getPostSuccess(post,comments))
         })
     })
 )



//add post
 export function addPostSuccess (post) {
   return {
     type: ActionType.ADD_POST,
     post,
   }
 }

  export function addPost(post) {
   return function (dispatch) {
     return PostsApi.addPost(post).then(responsePost => {
       dispatch(addPostSuccess(responsePost));
       return responsePost;
     }).catch(error => {
       throw(error);
     });
   };
 }


//edit post
 export function editPostSuccess (id,post) {
   return {
     type: ActionType.EDIT_POST,
     id,
     post
   }
 }

  export function editPost(id,post) {
   return function (dispatch) {
     return PostsApi.editPost(id,post).then(post => {
       dispatch(editPostSuccess(id,post));
       return post;
     }).catch(error => {
       throw(error);
     });
   };
 }



//delete /post:id
export function deletePostSuccess (id) {
  return {
     type: ActionType.DELETE_POST,
     id,
   }
 }

 export function deletePost(id) {
  return function(dispatch) {
     return PostsApi.deletePost(id).then(() => {
       console.log(`Deleted ${id}`)
       dispatch(deletePostSuccess(id));
       return;
     }).catch(error => {
       throw(error);
     })
   }
 }

//upVoting
export function upVotePostSuccess (id) {
  return {
    type: ActionType.UP_VOTE_POST,
     id,
   }
 }
  export function upVotePost(id) {
    return function(dispatch) {
      return PostsApi.votePost(id,"upVote").then(() => {
    dispatch(upVotePostSuccess(id));
       return id;
     }).catch(error => {
       throw(error);
     });
   };
 }

 //downVoting
  export function downVotePostSuccess (id) {
   return {
     type: ActionType.DOWN_VOTE_POST,
     id,
   }
}
 export function downVotePost(id) {
    return function(dispatch) {
      return PostsApi.votePost(id,"downVote").then(() => {
    dispatch(downVotePostSuccess( id));
       return id;
     }).catch(error => {
       throw(error);
     });
   };
 }

export const deletePosts = () => ({
  type: ActionType.DELETE_POSTS
})



