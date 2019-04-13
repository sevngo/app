import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import auth from './reducers/auth';
import users from './reducers/users';
import app from './reducers/app';

const reducer = combineReducers({
  auth,
  users,
  app,
});

const initialState = {
  // auth: {
  //   _id: '5c9b4cc37bd6c53d7feacd14',
  //   token:
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzliNGNjMzdiZDZjNTNkN2ZlYWNkMTQiLCJpYXQiOjE1NTQzNzk4MjF9.Cxg0HIjPpbbd2A05CP8naMDudQCPDlZI47VCjEeTrCQ',
  // },
  app: { snackbars: [] },
  users: {
    data: [],
    filter: {
      gender: 'male',
      interests: [],
      ageRange: [18, 50],
      sortBy: 'popularity:desc',
    },
  },
};

export default createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
