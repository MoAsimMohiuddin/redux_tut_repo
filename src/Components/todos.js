import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos() {
    const todos=useSelector(state=>state.todos);

    const dispatch=useDispatch();

    return(
        <div>
            <ul>
                {todos.map((todo)=>{
                    return <li key={todo.id}>{todo.id} : {todo.text} <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove</button></li>
                })}
            </ul>
        </div>
    )
}