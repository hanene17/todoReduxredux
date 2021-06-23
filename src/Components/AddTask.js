import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask, clearTodo} from '../Reducer/action'
import '../TodoForm.css'


const AddTask = () => {
    const [task,setTask]= useState("")
     
    const dispatch = useDispatch();
       const handleSubmit= event => {
        if(task !== "") {
          dispatch(addTask(task))
          setTask("");
        }
        else {
         event.preventDefault();
        }
       };
       const handleClear= ()=>{
       dispatch(clearTodo()); 
       }
    return (
      <div>

      <div>   </div>
      
         <form className="FormTodo" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="task">What needs to be done?</label>
          </div> <br/>
        <input type= "text" 
        onChange= {event => setTask(event.target.value)} 
        placeholder= "What needs to be done?"  
          value={task}
 />
          
  <button  onClick={handleSubmit} >       
  Add Todo
        </button>
        <button onClick={handleClear} >Clear Todo</button>      
 </form> 
 </div>
 
             
    )
}

export default AddTask;

