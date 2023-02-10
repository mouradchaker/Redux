import { useState } from "react";

import "./App.css";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  //const [isChanged, setIsChanged] = useState(false);

  //const addUsser = (e) => {
  //e.preventDefault();
  //setIsChanged(true);
  //};

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
}

export default App;
