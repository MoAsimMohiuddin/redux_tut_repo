import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


export const store=configureStore({
    reducer: todoReducer,
})

/* In order to give multiple reducers to the store, We can use the combineReducers method from '@reduxjs/toolkit'.

import {configureStore, combineReducers} from '@redxujs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import authReduce from '../features/todo/authSlice';

const combinedReducers=combineReducers({
    todos: todoReducer,
    auth: authReducer
});

export const store=configureStore({
    reducer: todoReducer
});
*/