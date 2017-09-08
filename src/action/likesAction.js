import * as ActionType from './ActionType';



// likeCount
{
  type: FETCHING_COUNT
}

{
  type: FETCHING_COUNT_ERROR
  error: 'Error fetching liking of post count'
}

{
  type: FETCHING_COUNT_SUCCESS,
  postId,
  count
}