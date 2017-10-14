import {combineReducers} from 'redux'
import modalReducer from './modalReducer'
import postsReducer from './postsReducer'
import commentsReducer from './commentsReducer'
import categoriesReducer from './categoriesReducer'
import sortedReducer from './sortedReducer'

 

const rootReducer= combineReducers({
    
    //feedReducer,
    modalReducer,
    postsReducer,
    categoriesReducer,
  //  commentsReducer,
    sortedReducer
    
      
})


export default rootReducer