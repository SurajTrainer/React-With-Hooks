
import { MdDeleteForever } from "react-icons/md";

function AddItem({todoName, todoDate, onDelBtn}) {

  return (
      <div className="container form-row">
      <div className="row">
      <div className="col-6">
          {todoName}
      </div>
      <div className="col-2">
        {todoDate}
      </div>
      <div className="col-4">
        <button type="button" className="btn btn-danger form-button" onClick={() => onDelBtn(todoName)}><MdDeleteForever /></button>
      </div>
    </div>
    </div>
    
  ) 
}

export default AddItem