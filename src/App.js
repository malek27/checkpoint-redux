import React, { useState } from "react";
import "./App.css";
import ListTask from "./component/ListTask/ListTask";
import AddTask from "./component/AddTask";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [all, setAll] = useState(true)
const handleAll = (x) => {setAll(x)}
  return (
    <div className="App">
      <AddTask handleAll={handleAll}/>
      <ListTask all={all} />
    </div>
  );
}

export default App;
