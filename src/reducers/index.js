import { combineReducers } from 'redux';
import crudReducer from './crudReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  crud: crudReducer,
});

export default rootReducer;
