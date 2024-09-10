import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState={
    todos:[{id:"abc",task:"demo-task",isDone:false}],
};


export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addToDo:(state,action)=>{
          const newTodo={
            id:nanoid(),
            task:action.payload,
            isDone:false,
          }
          state.todos.push(newTodo);
        },
        deleteToDo:(state,action)=>{
         state.todos= state.todos.filter((todo)=>todo.id!==action.payload);
        },
        markAsDone:(state,action)=>{
            state.todos=state.todos.map((todos)=>{
                if(todos.id === action.payload){
                    todos.isDone=true;
                }
            });
        }
        
    }
})

export const {addToDo,deleteToDo,markAsDone}=todoSlice.actions;
export default todoSlice.reducer;
