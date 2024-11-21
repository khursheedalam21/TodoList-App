import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {

  const [listTodo,setListTodo]=useState([]);

 let addList = (inputText) =>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
 }
 const deleteListItem =(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo]);
 }
  return (
    <div className="main_div">
      
        <TodoInput addList={addList}/>
        <h1 style={{textDecoration:"underline"}}>Todo List</h1>
        {listTodo.map((listItem,i)=>{
          return(
          <TodoList key ={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
        })}
    </div>
  );
}

export default App;
