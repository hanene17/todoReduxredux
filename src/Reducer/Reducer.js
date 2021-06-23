

import {v4 as uuidv4 }from 'uuid'


const initialState = {
    
  
    todos:[
        ] ,
}
const reducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case 'AddTask': //type of action
       return {
        
        ...state, todos:[...state.todos, {id:uuidv4(),
        description: payload.description,
        isDone:false
    } ]}
       case 'DeleteTask':
       return {
       ...state , todos: state.todos.filter( el=>el.id  !== payload)
       }
       case'IsDone':
       return{
           ...state, todos: state.todos.map(el => (el.id ===payload)
           ?{...el ,isDone: !(el.isDone)} : el
           )
       }
       case'Edit':
       return {
           ...state, todos: state.todos.map(el=> (el.id===payload.id)
           ? {...el, description: (payload.newDescription)} : el
           )
       }
       case 'Clear':
           return initialState;
           
      
            default:
           return state;
    } 
}
    
export default reducer
