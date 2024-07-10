import { useRef, useState } from "react";

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

function Todo() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [input, setInput] = useState("");
  const [array, setArray] = useState<string[]>([]);

  const handleClick = () => {
    console.log("you clicked me");
    setArray((prev) => [...prev, input]);
    setInput("");
  };

  const handleKeyDown = (e: any) => {
    if (inputRef.current) {
      if (e.keyCode === 13) {
        handleClick();
        setInput("");
      }
    }
  };
  return (
    <div>
      <div className="head">
        <h2>Todo list</h2>
      </div>
      <div className="container">
        <input
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter you Todo"
          onKeyDown={handleKeyDown}
        ></input>
        <button className="btn-primary" onClick={handleClick}>
          {" "}
          Add to Do-list
        </button>
      </div>
      <div className="tail">
        <ul>
          {array.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
