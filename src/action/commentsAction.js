import * as ActionType from './ActionType'
import CommentsApi from '../api/CommentsApi'



// comments
//wrapping all actions in action creators functions
//it takes an object (all payloads to setup the event)
export function loadCommentsForPostSuccess (id) {
  return {
    type: ActionType.LOAD_COMMENTS_FOR_POST,
    id,
  }
}

export function createCommentSuccess (comment) {
  return {
    type: ActionType.ADD_COMMENT,
    comment,
  }
}

export function updateCommentSuccess (comment) {
  return {
    type: ActionType.EDIT_COMMENT,
    comment,
  }
}


export function deleteCommentSuccess (id) {
  return {
    type: ActionType.DELETE_COMMENT,
    id,
  }
}

export function upVoteCommentSuccess (id) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    id,
  }
}

export function downVoteCommentSuccess (id) {
  return {
    type: ActionType.DOWN_VOTE_POST,
    id,
  }
}

export function loadcommentsForPost(postId) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return CommentsApi.getAllCommentsForPost().then(responseComment => {
      dispatch(loadCommentsForPostSuccess(responseComment));
    }).catch(error => {
      throw(error);
    });
  };
}



export function updateComment(comment) {
  return function (dispatch) {
    return CommentsApi.updateComment(comment).then(responseComment => {
      dispatch(updateCommentSuccess(responseComment));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createComment(comment) {
  return function (dispatch) {
    return CommentsApi.createComment(comment).then(responseComment => {
      dispatch(createCommentSuccess(responseComment));
      return responseComment;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteComment(id) {
  return function(dispatch) {
    return CommentsApi.deleteComment(id).then(() => {
     // console.log(`Deleted ${comment.id}`)
      dispatch(deleteCommentSuccess(id));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
export function downVoteComment(id) {
   return function(dispatch) {
     return CommentsApi.voteComment(id,"downVote").then(() => {
   dispatch(downVoteCommentSuccess( id));
      return id;
    }).catch(error => {
      throw(error);
    });
  };
}

export function upVoteComment(id) {
   return function(dispatch) {
     return CommentsApi.voteComment(id,"upVote").then(() => {
   dispatch(upVoteCommentSuccess(id));
      return id;
    }).catch(error => {
      throw(error);
    });
  };
}
