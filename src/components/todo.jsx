import { useDispatch, useSelector } from "react-redux"
import AddForm from "./AddForm";
import { deleteToDo } from "../features/todoSlice";

export default function Todo(){
    const todos=useSelector((state)=>state.todos);
    console.log(todos);
    const dispatch=useDispatch();
    
    const clickHandler= (id)=>{
        console.log("delete",id);
        dispatch(deleteToDo(id));
    };
    return(
        <>
          <AddForm/>
          <hr/>
          <h3>Todos</h3>
          <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.task}
                <button onClick={()=>clickHandler(todo.id)}>Delete</button>
                </li>
            ))}
          </ul>
        </>
    )
}