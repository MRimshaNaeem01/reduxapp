import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id : '1',
        title : 'Rimsha',
    },
    {
        id : '2',
        title : 'Usama',
    }
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded : (state, action) =>{
           state.push(action.payload)
       },
    }
})

export const selectAllUsers = (state) => state.users;
export const {} = userSlice.actions;
export default userSlice.reducer;
