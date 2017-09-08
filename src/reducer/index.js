import {combineReducers} from 'redux'
import modalReducer from './modalReducer'
import postsReducer from './postsReducer'
import feedReducer from './feedReducer'

 

const rootReducer= combineReducers({
    
    feedReducer,
    modalReducer,
    postsReducer
    
      
})


export default rootReducer