import { useState } from "react";
function State() {
  const [data, setData] = useState("Sana");
  function update() {
    setData("Sans");
  }
  console.warn("-----------");
  return (
    <div>
      <div>{data}</div>
      <button onClick={() => update()}>Click me</button>
    </div>
  );
}
export default State;
