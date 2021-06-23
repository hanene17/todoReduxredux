
export const addTask = (description) =>
{
   return {
   type: 'AddTask',
   payload: {description}
   }
}


export const deleteTask=(id)=>{
    return{
     type: 'DeleteTask',
      payload: id
    }
 }

 export const isDone=(id)=>{
    return{
     type: 'IsDone',
      payload: id
    }
 }
 export const edit=(id, description)=>{
    return{
     type: 'Edit',
      payload: {id, description}
    }
 }
 export const clearTodo=() => {
    return{
       type: 'Clear'
       
    }
 }
