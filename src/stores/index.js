import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from "redux-logger";

import counter from '../slices/counter';
import darkReducer from '../slices/darkMode';
import chatReducer from '../slices/chat';
import authReducer from '../slices/auth';
import historyReducer from '../slices/history';

const rootReducer = combineReducers({
  counter: counter.reducer,
  dark: darkReducer,
  chat: chatReducer,
  auth: authReducer,
  history: historyReducer,

});

export const setupStore = () => {
  const middlewares = [...getDefaultMiddleware()];

  // only development
  if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
  };

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });

  return store;
};
