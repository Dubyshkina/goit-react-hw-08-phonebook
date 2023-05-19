import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOut, fetchCurrentUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    name: null,
    email: null,
    password: null,
    isLoading: false,
    error: null,
    token:null,
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.error = null;
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.password = payload.user.password;
        state.token = payload.token;

      }).addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.error = null;
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.password = payload.password;
        state.token = payload.token;
       
      }).addCase(logOut.fulfilled, (state) => {
        return {
            isAuth: false,
            name: null,
            email: null,
            password: null,
            isLoading: false,
            error: null,
            token: null,
        };
      }).addCase(fetchCurrentUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isAuth = true;
        state.error = null;
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.password = payload.user.password;
        state.token = payload.token;

      }).addMatcher((action)=>action.type.endsWith("rejected"), (state, {payload}) => {
        state.isLoading = false;
        state.error = payload;
      }).addMatcher((action)=>action.type.endsWith("pending"), (state, {payload}) => {
        state.isLoading = true;
      })
  }
});
export default authSlice.reducer;

// {
//   "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepwd12345"
// }
