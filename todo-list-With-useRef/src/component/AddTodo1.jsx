import { useRef, useState } from "react";
import { RiPlayListAddFill } from "react-icons/ri";


function AddTodo({onNewItem}) {

    const todoNameRef = useRef()
    const todoDateRef = useRef()


    let handleAddbuttonClicked = (e) => {
      e.preventDefault();

      const itemName = todoNameRef.current.value;
      const itemDate = todoDateRef.current.value;
      todoNameRef.current.value = ''
      todoDateRef.current.value = ''
      onNewItem(itemName, itemDate)

    }
    
    return (
        <form onSubmit={handleAddbuttonClicked} className="container form-row">

        <div className="row">
          <div className="col-6">
            <input type="text" ref={todoNameRef} placeholder="Enter todo here" />
          </div>
          <div className="col-2">
            <input type="date" ref={todoDateRef}/>
          </div>
          <div className="col-4">
            <button  className="btn btn-success form-button"><RiPlayListAddFill /></button>
          </div>
        </div>

    </form>
    )
}

export default AddTodo;