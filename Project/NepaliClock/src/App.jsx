import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Title from "./Title";
import OnelineSlogan from "./OnelineSlogan";
import DateandTime from "./DateandTime";

function App() {
  return (
    <>
      <center>
        <Title />
        <OnelineSlogan />
        <DateandTime />
      </center>
    </>
  );
}

export default App;
