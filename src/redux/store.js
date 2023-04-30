import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { users } from '../utils/users';

const initialState = {
  users: users,
  filters: {
    status: 'all',
  },
};
const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
