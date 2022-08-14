import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({ 
    reducer: rootReducer,
    middleware: [thunk]
})

export default store