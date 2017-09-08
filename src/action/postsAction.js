import * as ActionType from './ActionType'
//import CourseApi from '../api/CourseApi';
//import { ApiCallBeginAction, ApiCallErrorAction } from './ApiAction';



// posts
function fetchingPost () {
  return {
    type: ActionType.FETCHING_POST,
  }
}

function fetchingPostError (error) {
  console.warn(error)
  return {
    type: ActionType.FETCHING_POST_ERROR,
    error: 'Error fetching Post',
  }
}

function fetchingPostSuccess (post) {
  return {
    type: ActionType.FETCHING_POST_SUCCESS,
    post,
  }
}

function removeFetching () {
  return {
    type: ActionType.REMOVE_FETCHING,
  }
}

function addPost (post) {
  return {
    type: ActionType.ADD_POST,
    post,
  }
}

function addMultiplePosts (posts) {
  return {
    type: ActionType.ADD_MULTIPLE_POST,
    posts,
  }
}
