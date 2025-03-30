import { useContext } from "react";
import styles from "./itemscontainer.module.css";
import ToDoItems from "./todoitem";
import { Todoitemsstore } from "../datastore/todoitemsstore";
const TodoITEMS = () => {
  const {todoitem, deleteitem} = useContext(Todoitemsstore);
  
  

  return (  
    <>
      <div className={styles["itemscontainer"]}>
        {todoitem.map((item) => (
          <ToDoItems
            key={item.name}
            todoName={item.name}
            todoDate={item.date}
            handledeletebutton={deleteitem}
          />
        ))}
      </div>
    </>
  );
};
export default TodoITEMS;
