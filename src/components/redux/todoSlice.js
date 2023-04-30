import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice(
    {
        name: "todoList",
        initialState:[],
        reducers:{
            addTodo : (state,action)=>{
                state.push(action.payload);       
            },
            deleteTodo: (state,action)=>{
                return state.filter((todo)=>todo.id !== action.payload.id) 
            },
            editTodo : (state,action)=>{
             return state.map((edit)=> edit.id === action.payload.id ? {...edit, text: action.payload.text}
            : edit) },
            toggleIsDone : (state,action)=>{
                return state.map((done)=> done.id ===action.payload.id ?{ ...done, isDone :!done.isDone }:done)
            }
            }
        } 
)

export const{addTodo,deleteTodo,editTodo,toggleIsDone}=todoSlice.actions
export default todoSlice.reducer;