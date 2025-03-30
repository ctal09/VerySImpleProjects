import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonContainer from "./components/buttonscontainer";

function App() {
  const [inputfield, setinputfield] = useState("");
  const onButtonClick = (buttonName) => {
    if (buttonName === "AC") {
      setinputfield("");
    } else if (buttonName === "C") {
      setinputfield("");
    } else if (buttonName === "=") {
      const result = eval(inputfield);
      setinputfield("=" + result);
    } else {
      const newDIsplayvalue = inputfield + buttonName;
      setinputfield(newDIsplayvalue);
    }
  };
  return (
    <div className={styles["calculator"]}>
      <Display calval={inputfield} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
