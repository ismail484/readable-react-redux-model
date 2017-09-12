import {combineReducers} from 'redux'
import modalReducer from './modalReducer'
import postsReducer from './postsReducer'
import commentsReducer from './commentsReducer'
import categoriesReducer from './categoriesReducer'

 

const rootReducer= combineReducers({
    
    //feedReducer,
    modalReducer,
    postsReducer,
    categoriesReducer,
    commentsReducer
    //sortedPostsReducer
   // listenerReducer
    
      
})


export default rootReducer