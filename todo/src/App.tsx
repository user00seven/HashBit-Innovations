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
  const [time, setTime] = useState<string | null>(null);

  const handleClick = () => {
    if (input !== "") {
      const time = getCurrentTime().toString();
      setTime(time);
      setArray((prev) => [...prev, input]);
      setInput("");
      setArray((prevItems) => {
        const newItems = [...prevItems].sort();
        return newItems;
      });
    }
  };

  const handleKeyDown = (e: any) => {
    if (inputRef.current) {
      if (e.keyCode === 13 && input != "") {
        handleClick();
        setInput("");
      }
    }
  };

  const handleDelete = (element: string) => {
    setArray((prevItems) => prevItems.filter((item) => item !== element));
  };

  const getCurrentTime = (): string => {
    const now = new Date();
    // Get hours, minutes, and seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Format time as HH:MM:SS
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}`;

    return formattedTime;
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
          {array.map((element, index) => {
            return (
              <li className="d-flex" key={index}>
                <div>
                  <p>{element}</p>
                  <p className="gray">@{time}</p>
                </div>
                <button
                  className="btn-disable"
                  onClick={() => {
                    handleDelete(element);
                  }}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
