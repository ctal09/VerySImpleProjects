import { useCallback, useState, useRef, useContext } from "react";
import styles from "./apptodo.module.css";
import { Todoitemsstore } from "../datastore/todoitemsstore";


function Apptodo() {
  const {addNewitem} = useContext(Todoitemsstore)
  const todonames1 = useRef();
  const tododate1 = useRef();


  const AddButton = (event) => {
    let name = todonames1.current.value;
    let date = tododate1.current.value;
    addNewitem(name, date);
    todonames1.current.value = "";
    tododate1.current.value = "";
  };

  
  return (
    <>
      <div className="row row1">
        <div className="col-6">
          <input
            type="text"
            required
            ref={todonames1}
            placeholder="Enter To Do here..."
          />
        </div>
        <div className="col-4">
          <input type="date" ref={tododate1} />
        </div>
        <div className="col-2">
          <button className="btn btn-success btn1" onClick={AddButton}>
            ADD
          </button>
        </div>
      </div>
    </>
  );
}
export default Apptodo;
