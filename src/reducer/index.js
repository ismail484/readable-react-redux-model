import {combineReducers} from 'redux'
import modalReducer from './modalReducer'
import postsReducer from './postsReducer'
import categoriesReducer from './categoriesReducer'
import sortedReducer from './sortedReducer'

 

const rootReducer= combineReducers({
    
    
    modalReducer,
    postsReducer,
    categoriesReducer,
    sortedReducer
    
      
})


export default rootReducer