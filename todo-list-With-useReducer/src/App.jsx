
import AppName from "./component/AppName"
import AddTodo from "./component/AddTodo1"
import TodoItems from "./component/TodoItems"
import './App.css'
import { useReducer } from "react"
import WelcomeMsg from "./component/WelcomeMsg"


 const todoItemReducer = (currTodosItem , action) => {
  let newTodos = currTodosItem;

  if (action.type === 'NEW_ITEM') {
    newTodos = [
      ...currTodosItem, {
        itemName : action.payload.itemName,
        itemDate : action.payload.itemDate,
      },
    ]
  }else if (action.type === 'DELETE_ITEM') {
    newTodos = currTodosItem.filter(item => item.name !== action.type.itemName)
 }
 return newTodos; 
 }
function App() {



  let [todoItems, dispathTodoItems] = useReducer(todoItemReducer,[])

  let handleNewItem = (itemName,itemDate) => {
      const newItemAction = {
        type : 'NEW_ITEM',
        payload :{
          itemName,
          itemDate,
        }
      }
      dispathTodoItems(newItemAction)
  }

  const handleDeleteBtn = (todoItemName)=> {
    const handleDeleteItemAction = {
      type : 'DELETE_ITEM',
      payload :{
        itemName : todoItemName 
      }
    }
    dispathTodoItems(handleDeleteItemAction)
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