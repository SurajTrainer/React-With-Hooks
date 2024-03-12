
import AppName from "./component/AppName"
import AddTodo from "./component/AddTodo1"
import TodoItems from "./component/TodoItems"
import './App.css'
import { useState } from "react"
import WelcomeMsg from "./component/WelcomeMsg"



function App() {


  let [todoItems,setodoItems] = useState([])

  // old version
  
  // let handleNewItem = (itemName,itemDate) => {
  //     const newItems = [...todoItems , {name : itemName,
  //     date : itemDate}]
  //     setodoItems(newItems)
  // }



  // update state from previous state
  // new Version with function update
  let handleNewItem = (itemName,itemDate) => {
    setodoItems((currValue) => 
    [...currValue ,
    {name : itemName,
      date : itemDate}
    ])
  }

  const handleDeleteBtn = (delItem)=> {
    let newTodosItem = todoItems.filter(item => item.name !== delItem)
    setodoItems(newTodosItem)
  }
  return (
    <>
      <center className="todo-container">
        <AppName/>
          <AddTodo onNewItem= {handleNewItem}/>
          {todoItems.length === 0 && <WelcomeMsg/>}
          <TodoItems todoItems ={todoItems} onDelBtn = {handleDeleteBtn}/>

      </center>

    </>
  )
}

export default App