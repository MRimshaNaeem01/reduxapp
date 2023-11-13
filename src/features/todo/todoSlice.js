import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        // {
        //     id: '1',
        //     text: "Namaz Time"
        // }
    ]
};


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
           // console.log(findd, "find")

        },
        updateTodo: (state, action) => {
            const {id, newText} = action.payload
          //  console.log(id, "id" , newText, "newText")

            const todoToUpdate  = state.todos.find((todo) => (
                todo.id === id
            ));
            if(todoToUpdate){
           //     console.log(todoToUpdate, "todoToUpdate")
                todoToUpdate.text= newText
            }
           
        }

    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;