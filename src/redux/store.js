import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from './users/usersSlice';

const appReducer = combineReducers({
  users: usersReducer,
});

export const store = configureStore({
  reducer: appReducer,
});
