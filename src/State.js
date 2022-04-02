import { useState } from "react";
export default function State() {
  const [data, setData] = useState("Sana");
  function update() {
    setData("Pallo");
  }
  console.log("-----------");
  return (
    <div>
      <div>{data}</div>
      <button onClick={update}>Click me</button>
    </div>
  );
}
