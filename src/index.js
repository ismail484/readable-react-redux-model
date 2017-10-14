/*eslint-disable import/default */

import React from 'react'
import {render} from 'react-dom'
import configureStore from './configureStore'
import {Provider} from 'react-redux'
import App from './components/App'
import './style/style.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'toastr/build/toastr.min.css'
import 'font-awesome/css/font-awesome.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import './index.css'
import thunk from 'redux-thunk'
import reducer from './reducer'
import modalReducer from './reducer/modalReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import registerServiceWorker from './registerServiceWorker'


const store = configureStore()

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(
//   modalReducer,
//   composeEnhancers(
//     applyMiddleware(thunk)
//   )
// )



render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker()