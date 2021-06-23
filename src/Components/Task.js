import React , {useState}  from 'react'
import {useDispatch} from 'react-redux'
import{ deleteTask, isDone} from '../Reducer/action'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../TodoTask.css'
//import trash from '../trash.png'
//import editimage from '../editimage.png'
import 'reactjs-popup/dist/index.css';
import ReactCircleModal from 'react-circle-modal'
import 'bootstrap/dist/css/bootstrap.min.css';

const Task = ({todo}) => {
  
  const dispatch = useDispatch()
 const [task, setTask] = useState(todo.description);

  const handleToggle=() => {
   dispatch(isDone(todo.id))
     
   }
   
  const styled = {
    textDecoration:(todo.isDone) ? "line-through" : "none",
    backgroundColor: (todo.isDone) ? "#A9A9A9" : "#ffffff"
  };
  const styleBox= {
   marginLeft:'45rem',
   flexDirection: 'column',
  width: '500px',
  height: '400px',
  alignContent: 'space-between',

  }
  const changeBackground = (e, task) => {
   (e.target.style.borderStyle)= task;  
  };

  const handleDelete = () => {
    dispatch(deleteTask(todo.id));
  };
   return (
         
     <div style= {{marginLeft: '45.5rem'}}>
      <div className= "Todo">
      <div className="Todo-edit-task">
          <input style={styled}  type="text" 
         value= {task} />
          <button 
          onClick={handleToggle}  onChange={changeBackground}
            >
           {todo.isDone ?  'IsDONE' : 'IsNotDONE'}
            </button>    
         </div> 
      </div> 
    
 <div className="Todo">
 <div className="Todo-buttons">  
        <ReactCircleModal  className="Todo-edit-task" 
      height='20rem'
    backgroundColor="rgb(255, 102, 102)"
      toogleComponent={onClick => (
        <button onClick={onClick}  type="text">
      <i className="fas fa-pen" backgroundColor='pink'/> Edit
        </button>
      )}
      // Optional fields and their default value
      offsetX={10}
      offsetY={10} >
 {(onClick) => (
        <div className='Todo-edit-task' style={{ backgroundColor: '#fff', padding: '1em' }}>
          <p> 
          <input
      style={{ height: 100, width: "95%",
      backgroundColor: '#fff', padding: '1em', 
      borderColor: 'red', borderWidth: 1, 
       marginBottom: 0 }}
      onChange= {e => setTask(e.target.value)}  
          value={task} type="text" /> 
          </p>
          <button  onClick={onClick}>
         Save
          </button>
        </div>
      )}
    </ReactCircleModal>
     <button onClick={handleDelete}>
            <i className="fa fa-trash" aria-hidden="true"/> Delete 
          </button>
         </div>
        </div>
        
     </div>     
      
    )}
     export default Task


   