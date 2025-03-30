import { useContext } from "react";
import { Todoitemsstore } from "../datastore/todoitemsstore";

function ToDoItems({ todoName, todoDate }) {
  const {deleteitem}= useContext(Todoitemsstore);
  return (
    <>
      <div className="row row1">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger btn1"
            onClick={() => deleteitem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default ToDoItems;
