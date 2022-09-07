import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from 'react';

function App() {
  
  const onDelete = (todo) => {
    console.log("I am calling on Delete", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem("todos");
  }

  const addTodo = (title, description) => {
    console.log("I am adding this todo", title, description)
    let sno;
    if(todos.length == 0){
      sno=0;
    }else{
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      description: description
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    if(localStorage.getItem("todos")){
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const [todos, setTodos] = useState([
    // {
    //   sno : 1,
    //   title: "Go to the market",
    //   description: "Go to the market to get this job done"
    // },
    // {
    //   sno : 2,
    //   title: "Go to the mall",
    //   description: "Go to the market to get this job done2"
    // },
    // {
    //   sno : 3,
    //   title: "Go to the gym",
    //   description: "Go to the market to get this job done22"
    // }
  ]);

  return (
    <>
      <Header title = "My Todos List" searchBar={false}></Header>
      <AddTodo addTodo={addTodo} />
      <Todos todos = {todos} onDelete={onDelete}></Todos>
      <Footer></Footer>
    </>
  );
}

export default App;
