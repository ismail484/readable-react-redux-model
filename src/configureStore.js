import {applyMiddleware, createStore,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer'
import initialState from './reducer/initialState'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const configureStore = initialState=> {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
       applyMiddleware(thunk)
  ) 
       
    )
}



export default configureStore;