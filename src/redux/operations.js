import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const CONTACTS_URL = 'contacts';
const USER_URL = 'users';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/${CONTACTS_URL}`);
      if (response.data.length === 0) {
        throw new Error('there are no contacts yet');
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post(`/${CONTACTS_URL}`, { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/${CONTACTS_URL}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Fetch new API
// export const registerUserAPI = (registerForm) => {
//   return axios.post(`/${USER_URL}/signup`, {...registerForm}).then(({data}) => ({data}));
// }
export const registerUser = createAsyncThunk(
  'users/registerUser',
  async ({name, email, password}, thunkAPI) => {
    try {
      const {data} = await axios.post(`/${USER_URL}/signup`, {name, email, password});
      token.set(data.token)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async ({email, password}, thunkAPI) => {
    try {
      const {data} = await axios.post(`/${USER_URL}/login`, {email, password});
      token.set(data.token)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'users/logOut',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.post(`/${USER_URL}/logout`);
      token.unset();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    token.set(state.auth.token)
    try {
      const { data } = await axios.get('/users/current');
      console.log("data:", data)
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// https://connections-api.herokuapp.com/


// {
//   "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepwd12345"
// }
