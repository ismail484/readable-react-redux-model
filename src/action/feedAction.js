import * as ActionType from './ActionType'


function settingFeedListener () {
  return {
    type: ActionType.SETTING_FEED_LISTENER,
  }
}

function settingFeedListenerError (error) {
  console.warn(error)
  return {
    type: ActionType.SETTING_FEED_LISTENER_ERROR,
    error: 'Error fetching feeds.',
  }
}

function settingFeedListenerSuccess (postIds) {
  return {
    type: ActionType.SETTING_FEED_LISTENER_SUCCESS,
    postIds,
  }
}


function addNewPostIdToFeed (postId) {
  return {
    type: ActionType.ADD_NEW_POST_ID_TO_FEED,
    postId,
  }
}

export function resetNewPostsAvailable () {
  return {
    type: ActionType.RESET_NEW_POSTS_AVAILABLE,
  }
}