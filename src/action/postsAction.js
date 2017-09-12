import * as ActionType from './ActionType'
import PostsApi from '../api/PostsApi';




// posts
//wrapping all actions in action creators functions
//it takes an object (all payloads to setup the event)
export function loadPostsSuccess (posts) {
  return {
    type: ActionType.LOAD_POSTS,
    posts,
  }
}
export function loadPostSuccess (id) {
  return {
    type: ActionType.LOAD_POST,
    id,
  }
}


export function loadPostsForCategorySuccess (posts) {
  return {
    type: ActionType.LOAD_POSTS,
    posts,
  }
}
export function createPostSuccess (post) {
  return {
    type: ActionType.ADD_POST,
    post,
  }
}

export function updatePostSuccess (post) {
  return {
    type: ActionType.EDIT_POST,
    post,
  }
}


export function deletePostSuccess (post) {
  return {
    type: ActionType.DELETE_POST,
    post,
  }
}

export function upVotePostSuccess (id) {
  return {
    type: ActionType.UP_VOTE_POST,
    id,
  }
}

export function downVotePostSuccess (id) {
  return {
    type: ActionType.DOWN_VOTE_POST,
    id,
  }
}

export function loadPosts() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return PostsApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPost(id) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return PostsApi.getPost().then(post => {
      dispatch(loadPostSuccess(post));
    }).catch(error => {
      throw(error);
    });
  };
}



export function loadPostsForCategory(category) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return PostsApi.getAllPostsForCategory().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updatePost(post) {
  return function (dispatch) {
    return PostsApi.updatePost(post).then(responsePost => {
      dispatch(updatePostSuccess(responsePost));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createPost(post) {
  return function (dispatch) {
    return PostsApi.createPost(post).then(responsePost => {
      dispatch(createPostSuccess(responsePost));
      return responsePost;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deletePost(post) {
  return function(dispatch) {
    return PostsApi.deletePost(post).then(() => {
      console.log(`Deleted ${post.id}`)
      dispatch(deletePostSuccess(post));
      return;
    }).catch(error => {
      throw(error);
    })
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

