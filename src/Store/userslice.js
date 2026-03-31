import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: 'users',
  initialState:{
    users: [],},
  reducers: {
    addUsers: (state , action)=>{
      state.users = [...action.payload,...state.users];

    },
    deleteuser: (state, action)=>{
       state.users = state.users.filter(
        (u) => u.id !== action.payload
      );

    },
    edituser : (state, action)=>{
       state.users = state.users.map(user =>
    user.id === action.payload.id
      ? action.payload
      : user)
    }
  }
})

export const  userActions = userslice.actions;
export default userslice.reducer;