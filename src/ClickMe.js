import { useState } from "react";

function ClickMe() {
  // let result = useState(0);
  // let setResult = useState(1);
  let [result, setResult] = useState(0);
  return (
    <div>
      <button onClick={() => setResult(Math.floor(Math.random() * 100))}>
        Add to Counter
      </button>
      <br />
      <button onClick={() => setResult(0)}>Clear Counter</button>
      <p>{result}</p>
    </div>
  );
}

export default ClickMe;
