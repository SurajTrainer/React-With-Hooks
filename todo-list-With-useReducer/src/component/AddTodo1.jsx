import { useState } from "react";
import { RiPlayListAddFill } from "react-icons/ri";


function AddTodo({onNewItem}) {

    const [itemName,setItemName] = useState([])
    const [itemDate,setItemDate] = useState([])

    let handleChangeName = (event) => {
        setItemName(event.target.value);
    }


    let handleChangeDate = (event) => {
     setItemDate(event.target.value);
    }

    let handleAddbuttonClicked = (e) => {

      e.preventDefault();
        onNewItem(itemName, itemDate)
        setItemName('')
        setItemDate('')
    }
    
    return (
        <form onSubmit={handleAddbuttonClicked} className="container form-row">

        <div className="row">
          <div className="col-6">
            <input type="text" value={itemName} onChange={handleChangeName} placeholder="Enter todo here" />
          </div>
          <div className="col-2">
            <input type="date" value={itemDate} onChange={handleChangeDate} />
          </div>
          <div className="col-4">
            <button  className="btn btn-success form-button"><RiPlayListAddFill /></button>
          </div>
        </div>

    </form>
    )
}

export default AddTodo;