import * as ActionType from './ActionType';



//Modal

export function openModal () {
  return {
    type: ActionType.OPEN_MODAL,
   // id:id
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