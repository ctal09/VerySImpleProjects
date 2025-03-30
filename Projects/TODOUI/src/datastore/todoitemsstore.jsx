import { createContext, useReducer } from "react";

export const Todoitemsstore = createContext({ todoitem:[], 
    addNewitem: ()=>{}, 
    deleteitem: ()=>{}});


    const todoitemsReducer=(currState, action)=>{
        let newToDoItems= currState;
        if (action.type==="NEW_ITEM"){
          newToDoItems=[...currState,{name: action.payload.todoName, date: action.payload.todoDate}]
        }
        else if (action.type==="DELETE_ITEM"){
          newToDoItems =currState.filter((item)=> item.name!==action.payload.itemName);
        }
        return newToDoItems;
      }

    const TodoitemsContextProvider = ({children})=>{
        const [todoitem, dispatchtodoitems] = useReducer(todoitemsReducer,[]);




  const addNewitem = (todoName, todoDate) => {
    const newItemAction ={
      type: "NEW_ITEM",
      payload: {
        todoName, todoDate
      }
    };
    dispatchtodoitems(newItemAction);
  };


  const deleteitem = (todoName) => {
    const DeleteItem = {
      type : "DELETE_ITEM",
      payload: {
        itemName: todoName
      }
    }
   dispatchtodoitems(DeleteItem);
  };
    return     <Todoitemsstore.Provider value={{todoitem, addNewitem, deleteitem}}>
            {children}
        </Todoitemsstore.Provider>

    }
    export default TodoitemsContextProvider;