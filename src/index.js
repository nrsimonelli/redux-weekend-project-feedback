import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'

// first reducer
const feelReducer = ( state = [], action ) => {

    if (action.type === 'SET_FEEL'){
        console.log('in feels reducer', action.payload);
        
        return [...state, action.payload]
    }
    return state;
}

// created store for reducers to run on dispatch
const storeInstance = createStore(
    combineReducers({
        feelReducer
        
    }),
    applyMiddleware(logger)
)

// added provider to share the redux store
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

