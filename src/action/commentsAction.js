import * as ActionType from './ActionType'
import * as PostsApi from '../api/PostsApi';
import * as CommentsApi from '../api/CommentsApi'


// comments
//wrapping all actions in action creators functions
//it takes an object (all payloads to setup the event)

//add comment
export function addCommentSuccess (comment) {
  return {
    type: ActionType.ADD_COMMENT,
    comment,
  }
}
export function addComment(comment) {
  return function (dispatch) {
    return CommentsApi.addComment(comment).then(responseComment => {
      dispatch(addCommentSuccess(responseComment));
      return responseComment;
    }).catch(error => {
      throw(error);
    });
  };
}

//Delete Comment
export function deleteCommentSuccess (id) {
  return {
    type: ActionType.DELETE_COMMENT,
    id,
  }
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


//Edit Comment
export function editCommentSuccess (id,comment) {
  return {
    type: ActionType.EDIT_COMMENT,
    id,
    comment
  }
}


export function editComment(id,comment) {
   return function (dispatch) {
     return CommentsApi.editComment(id,comment).then(comment => {
       dispatch(editCommentSuccess(id,comment));
       return comment;
     }).catch(error => {
       throw(error);
     });
   };
 }


//down Vote comment
export function downVoteCommentSuccess (id) {
  return {
    type: ActionType.DOWN_VOTE_POST,
    id,
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

//upvote  comment
export function upVoteCommentSuccess (id) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    id,
  }
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

