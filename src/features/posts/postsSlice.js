import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id : '1',
        title : 'Learn redux',
        content : 'Helo sredux'
    },
    {
        id : '2',
        title : 'Learn React',
        content : 'Helo react'
    }
]

export const postsSlice = createSlice({
    name: "posts",
    initialState,

    reducers: {
        postAdded :
         (state, action) =>{
            state.push(action.payload)
        },
    }
});

export const selectAllPosts = (state) => state.posts;
export const {postAdded , addPosat} = postsSlice.actions;
export default postsSlice.reducer;

