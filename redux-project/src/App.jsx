import { useState } from "react";

import "./App.css";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
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
