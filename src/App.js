import "./App.css";
import Student from "./Student";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Sanskrati");
  function update() {
    setName("Sana");
  }
  return (
    <div className="App">
      <h1>Hello ji</h1>
      <Student name={name} email="sanskratiagrawal306@gmail.com" />
      <Student name={"Sanchita"} email="sanchitaagrawal" />
      <Student name={"Deepshikha"} email="shikha" />
      <button onClick={() => update()}>Click me</button>
    </div>
  );
}

export default App;
