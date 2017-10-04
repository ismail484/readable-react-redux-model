import * as ActionType from './ActionType';



//Modal

export function openModal (id) {
  return {
    type: ActionType.OPEN_MODAL,
    payload: id,
  }
}

export function closeModal () {
  return {
    type: ActionType.CLOSE_MODAL,
  }
}

export function updatePostBody (newPostBody) {
  return {
    type: ActionType.UPDATE_POST_BODY,
    newPostBody,
  }
}