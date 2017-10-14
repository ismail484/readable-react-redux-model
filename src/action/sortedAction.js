import * as ActionType from './ActionType'


export const sortedAction = (value) => {
  return {
    type: ActionType.Sorted_Action,
    value: value
  }
}
