import './App.css';
import Todolist from './Todolist';
import React, { useState } from 'react';
function App() {
  const [todoList, setTodoList] = useState();
  const [todoItem , settodoItem] = useState([]);
  


  
  const todoEvent = (event) => {
    setTodoList(event.target.value);
  };

  const listOfTodo = () => {
    settodoItem((oldItems)=>{
      return[...oldItems, todoList];
    });
    setTodoList("");
  };
  const deleteItem = (id)=>{
    // console.log("delete")
    settodoItem((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !== id;
      })
    })

}



  return (
    <div className="main_div">
      <div className='center_div'>
        <h1> TODO LIST </h1>
        <input type="text" placeholder='Add An Item' value={todoList} onChange={todoEvent} />
        <button onClick={listOfTodo}> + </button>
        <ol>
          {/* <li>
            {todoList}
          </li> */}
          {todoItem.map((itemval, index) =>{
         return <Todolist 
         key={index} 
         id={index} 
         text={itemval}
         onSelect={deleteItem} />
          })}
          
        </ol>
      </div>
    </div>
  );
}

export default App;
