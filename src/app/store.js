import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import userReducer from '../features/users/usersSlice';
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts : postsReducer,
        users: userReducer,
        todo: todoReducer
    }
})


