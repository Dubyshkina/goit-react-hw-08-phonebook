
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    filter: '',
}
 const filterReducer = createSlice({
    name: 'filter',
    initialState,
    reducers: {
  changeFilter: (state, action) => {state.filter = action.payload},
    },
})
 export default filterReducer.reducer
 export const {changeFilter} = filterReducer.actions;