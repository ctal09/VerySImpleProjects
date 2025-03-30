import { useContext } from "react";
import { Todoitemsstore } from "../datastore/todoitemsstore";

function ErrorMessage() {
 
  const{todoitem}= useContext(Todoitemsstore);
  
  return (
    

    todoitem.length === 0 && (
      <p>You Have no pending tasks. Have a great day.</p>
    )
  );
}
export default ErrorMessage;
