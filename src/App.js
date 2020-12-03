import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'
import SearchTodo from './Todo/SearchTodo'
import {Animated} from "react-animated-css";






function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Купить хлеб', searched: false},
    {id: 2, completed: true, title: 'Купить масло', searched: false},
    {id: 3, completed: false, title: 'Купить молоко', searched: false},
  ])


function toggleTodo(id){
  setTodos(todos.map(todo =>{
    if (todo.id === id){
      todo.completed = !todo.completed
    }
    return todo}))
}

function removeTodo(id){
  setTodos(todos.filter(todo => todo.id !== id))
}

function addTodo(title){
  setTodos(todos.concat([{
    title,
    id: Date.now(),
    completed: false
  }]))
}

let searchFlag = false;

function searchTodo(title){
  setTodos(todos.map(todo =>{
    if (todo.title === title){
      todo.searched = true
    }
    else todo.searched=false
    return todo}))
}




  return(
    <Context.Provider value={{removeTodo}}>
       <Animated animationIn="bounceInLeft"  >

       




       

    <div className="wrapper">
    
   <h1 className="wow bounceInLeft">Todo application</h1>
   <AddTodo onCreate={addTodo}></AddTodo>
   <SearchTodo onSearch={searchTodo}></SearchTodo>
   {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} searchFlag={searchFlag}></TodoList> : <p>No todos!</p>}
   

 </div>
 </Animated>

 
 </Context.Provider>
  )
 
}


export default App;
