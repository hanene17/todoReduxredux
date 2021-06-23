import React, {useState} from 'react'
import { useSelector } from "react-redux";
import Task from './Task'
import '../TodoTask.css'



//const selectTodos =state => state.todos

    //const Todos = useSelector(selectTodos )

const ListTask= () =>
{ 
    const selectTodos =state => state.todos
    const Todos =useSelector (selectTodos)
    const [newList, setNewList] = useState("all")
    
    const list =()=>{
        if (newList ==="all") {
          return Todos
        }
        else if(newList ===('done')){
   return Todos.filter(el=> el.isDone== true)
        }
        else if (newList ===('undone')) {
  return Todos.filter(el=> !(el.isDone)== true)
        }
    }
    
    let NewTask= list()
    

    
    const handleAll =() =>{
 return setNewList('all')

}
const handleDone =() =>{
   
     return setNewList('done')  
}
const handleUnDone =() =>{
    
     return setNewList ('undone')
}
const buttonStyled = {
   
    margin: "1rem", background: '#ff6666', color:'white', border: 'none', 
    border: "1px solid rgba(255, 255, 255, 0.3)", 
    cursor: "pointer "
};

    return(
        <div>
             <div style= {{ marginLeft: "27.92rem", marginTop: "1rem"}}>
            <button style={buttonStyled} 
            onClick= {handleAll}> All</button>
            <button style={buttonStyled} 
            onClick= {handleDone}>  Done</button>
            <button style={buttonStyled} 
            onClick= {handleUnDone}> UnDone</button>
            </div>
            { NewTask.map(el =>{
              return  <Task todo={el} key={el.id} />  }
                 
                
                 ) }
           

        </div>
       
        
       
    )
}
export default ListTask


