import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";

const AddTodo=()=>{
    const [input, setInput]=useState('');
    const dispatch=useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault();

        dispatch(addTodo(input));
        setInput('');
    };

    return(
        <div>
            <form onSubmit={addTodoHandler}>
            <input 
                type="text"
                placeholder="Enter a Todo"
                value={input}
                onChange={(event)=>{
                    setInput(event.target.value);
                }}  
            />
            </form>
            <button onClick={addTodoHandler} type="submit">Add Todo</button>
        </div>
    )
}

export default AddTodo;