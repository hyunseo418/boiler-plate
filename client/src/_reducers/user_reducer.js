import { createAction, createReducer } from '@reduxjs/toolkit'
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER
} from '../_actions/types';

const login = createAction(LOGIN_USER);
const register = createAction(REGISTER_USER);
const auth = createAction(AUTH_USER);

const initialState = {};
const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(login, (state = {}, action) => {
      state.loginSuccess = action.payload;
    })
    .addCase(register, (state = {}, action) => {
      state.register = action.payload;
    })
    .addCase(auth, (state = {}, action) => {
      state.userData = action.payload;
    })
});

export default userReducer;