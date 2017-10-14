import * as ActionType from '../action/ActionType';
import initialState from './initialState'



export default function sortedReducer (state =initialState.sortedReducer,action){
  
  switch (action.type) {

    case ActionType.Sorted_Action :
     const newValue = action.value
      return {
        ...state, 
        sort: newValue
      }
    default: 
      return state
  }
}
