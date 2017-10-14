import * as ActionType from '../action/ActionType';
import initialState from './initialState'




export default function categoriesReducer (state = initialState.categoriesReducer ,action){
  switch(action.type) {
    case ActionType.GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}