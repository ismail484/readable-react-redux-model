import * as ActionType from './ActionType'
import * as PostsApi from '../api/PostsApi';
import * as CommentsApi from '../api/CommentsApi';



// posts
//wrapping all actions in action creators functions
//it takes an object (all payloads to setup the event)
//  /posts
export const getPosts = () => dispatch => (
  PostsApi.getAllPosts()
    .then(posts => {
      posts.map(post => {
        CommentsApi.getAllComments(post.id)
          .then(comments => {
            dispatch({
              type: 'GET_POSTS',
              //ActionType.GET_POST''S,
              post,
              comments
            })
          })
      })
    })
)

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


 export const getPost = (id) => dispatch => (
   PostsApi.getPost(id)
     .then(post => {
     CommentsApi.getAllComments(post.id)
         .then(comments => {
           dispatch({
            type: 'GET_POST',
            //type: ActionType.GET_POST,
            post,
             comments
          })
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

  export function createPost(post) {
   return function (dispatch) {
     return PostsApi.addPost(post).then(responsePost => {
       dispatch(addPostSuccess(responsePost));
       return responsePost;
     }).catch(error => {
       throw(error);
     });
   };
 }


// export const getAllPostsCategoryAction = (category) => dispatch => (
//   getAllPostsForCategory(category)
//     .then((posts) => {
//       dispatch({
//         type: 'GET_POST_CATEGORY',
//         posts
//       })
//     })
// )

// export const downVoteAction = (id) => dispatch => (
//   votePost(id, "downVote")
//     .then(() => {
//       dispatch({
//         type: 'DOWN_VOTE',
//         id
//       })
//     })
// )

// export const upVoteAction = (id) => dispatch => (
//   votePost(id, "upVote")
//     .then(() => {
//       dispatch({
//         type: 'UP_VOTE',
//         id
//       })
//     })
// )

// export const deletePostAction = (id) => dispatch => (
//   deletePost(id)
//     .then(() => {
//       dispatch({
//         type: 'DELETE_POST',
//         id
//       })
//     })
// )

// export const getCategories = (categories) => ({
//     type: GET_CATEGORIES,
//     categories
// })

// export const fetchCategories = () => dispatch => (
//   getAllCategories()
//     .then(categories => dispatch(getCategories(categories)))
// )

// export const fetchPost = (id) => dispatch => (
//   getPost(id)
//     .then(post => {
//       getComments(post.id)
//         .then(comments => {
//           dispatch({
//             type: 'GET_POST',
//             post,
//             comments
//           })
//         })
//     })
// )


//  export function downVotePostSuccess (id) {
//    return {
//      type: ActionType.DOWN_VOTE_POST,
//      id,
//   }
//  }





// export function loadPosts() {
//   // make async call to api, handle promise, dispatch action when promise is resolved
//   return function(dispatch) {
//     return PostsApi.getAllPosts().then(posts => {
//       dispatch(loadPostsSuccess(posts));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }








// export function loadPostsSuccess (posts) {
//   return {
//     type: ActionType.LOAD_POSTS,
//     posts,
//   }
// }
// export function loadPostSuccess (id) {
//   return {
//     type: ActionType.LOAD_POST,
//     id,
//   }
// }


// export function loadPostsForCategorySuccess (posts) {
//   return {
//     type: ActionType.LOAD_POSTS,
//     posts,
//   }
// }
// export function createPostSuccess (post) {
//   return {
//     type: ActionType.ADD_POST,
//     post,
//   }
// }

// export function updatePostSuccess (post) {
//   return {
//     type: ActionType.EDIT_POST,
//     post,
//   }
// }


// export function deletePostSuccess (post) {
//   return {
//     type: ActionType.DELETE_POST,
//     post,
//   }
// }

// export function upVotePostSuccess (id) {
//   return {
//     type: ActionType.UP_VOTE_POST,
//     id,
//   }
// }

// export function downVotePostSuccess (id) {
//   return {
//     type: ActionType.DOWN_VOTE_POST,
//     id,
//   }
// }



// export function loadPost(id) {
//   // make async call to api, handle promise, dispatch action when promise is resolved
//   return function(dispatch) {
//     return PostsApi.getPost().then(post => {
//       dispatch(loadPostSuccess(post));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }



// export function loadPostsForCategory(category) {
//   // make async call to api, handle promise, dispatch action when promise is resolved
//   return function(dispatch) {
//     return PostsApi.getAllPostsForCategory().then(posts => {
//       dispatch(loadPostsSuccess(posts));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// export function updatePost(post) {
//   return function (dispatch) {
//     return PostsApi.updatePost(post).then(responsePost => {
//       dispatch(updatePostSuccess(responsePost));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// export function createPost(post) {
//   return function (dispatch) {
//     return PostsApi.createPost(post).then(responsePost => {
//       dispatch(createPostSuccess(responsePost));
//       return responsePost;
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// export function deletePost(post) {
//   return function(dispatch) {
//     return PostsApi.deletePost(post).then(() => {
//       console.log(`Deleted ${post.id}`)
//       dispatch(deletePostSuccess(post));
//       return;
//     }).catch(error => {
//       throw(error);
//     })
//   }
// }
// export function downVotePost(id) {
//    return function(dispatch) {
//      return PostsApi.votePost(id,"downVote").then(() => {
//    dispatch(downVotePostSuccess( id));
//       return id;
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// export function upVotePost(id) {
//    return function(dispatch) {
//      return PostsApi.votePost(id,"upVote").then(() => {
//    dispatch(upVotePostSuccess(id));
//       return id;
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

