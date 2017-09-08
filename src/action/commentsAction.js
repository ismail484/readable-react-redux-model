import * as ActionType from './ActionType';



//COMMENTS
{
  type: ADD_COMMENT,
  parentId,
  comment
}

{
  type: ADD_COMMENT_ERROR
  error: 'Error adding comment'
}

{
  type: REMOVE_COMMENT,
  commentId,
  postId
}

{
  type: FETCHING_COMMENTS
}

{
  type: FETCHING_COMMENTS_ERROR
  error: 'Error fetching comments'
}

{
  type: FETCHING_COMMENTS_SUCCESS,
  comments,
  postId
  lastUpdated: Date.now()
}