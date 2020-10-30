import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counterReducer';
import resultReducer from './store/reducers/resultReducer';
//import reducer from './store/reducers/counter'; was for the old single reducer

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

// a piece of middleware which is in this case self written
const logger = (store) => {
    return (next) => {
        return action => {
            console.log('Middleware Dispatching', action);
            const result = next(action);
            console.log('Middleware next state ', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
