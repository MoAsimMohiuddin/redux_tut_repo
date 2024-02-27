import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState={
    todos: [],
}

export const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo={
                id: nanoid(),
                text: action.payload,
            }

            state.todos.push(todo);
        },

        removeTodo: (state, action)=>{
            const id=action.payload;

            state.todos=state.todos.filter((value)=>{
                return value.id!==id;
            })
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;

// In reducers, Each reducer takes state and an action. The state is the actual state which is supposed to be updated to. And action is the attribute which sends some additional data like ids and stuff which can be used.