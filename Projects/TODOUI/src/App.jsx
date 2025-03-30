import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Appname from "./componetns/Appname";
import Apptodo from "./componetns/Apptodo";
import TodoITEMS from "./componetns/TODOITEMS";
import ErrorMessage from "./componetns/ErrorMessage";
import TodoitemsContextProvider, { Todoitemsstore } from "./datastore/todoitemsstore";

function App() {
  
  

  return (
   <TodoitemsContextProvider>
      <center className="todo-container">
        <Appname />
        <ErrorMessage></ErrorMessage>
        <Apptodo/>
        <TodoITEMS/>
      </center>
    </TodoitemsContextProvider>
  );
}

export default App;
