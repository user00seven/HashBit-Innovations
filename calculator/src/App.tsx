import { useCallback, useEffect, useState } from "react";
import { evaluate } from "mathjs";

function App() {
  return (
    <div
      className="App"
      style={{
        border: "1px solid black",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
      }}
    >
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [result, setResult] = useState("");
  const [display, setDisplay] = useState("");

  const operatorArray = ["÷", "x", "-", "+"];
  let newdisplay = " ";
  const handleNumber = (number: number) => {
    if (display === "" && number === -1) setDisplay("0.");
    else if (number === -1) setDisplay((prev) => prev + ".");
    else setDisplay((prev) => prev + number.toString());
  };
  const calculate = useCallback(() => {
    try {
      const str1 = display.replaceAll("÷", "/");
      const str2 = str1.replaceAll("x", "*");
      const evalResult = evaluate(str2);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Invalid expression");
    }
  },[display]);

  useEffect(() => {
    if (
      display !== "" &&
      /[x÷\-+]/.test(display) &&   // /[x/-+].test check if number equation contain any operator or not
      !operatorArray.includes(display.substring(display.length - 1))
    ) {
      calculate();
    }
  }, [display]);

  const allClear = () => {
    setDisplay("");
    setResult("");
  };
  const shiftValue = () => {
    setDisplay(result);
    setResult("")
  };

  const handleOperator = (operator: string) => {
    if (display === "") console.log("do nothing");
    else if (operatorArray.includes(display.substring(display.length - 1))) {
      if (operator === "-") {
        setDisplay((prev) => prev + operator);
      } else if (display.substring(display.length - 1) === "-") {
        newdisplay = display.substring(0, display.length - 1);
        setDisplay(newdisplay);
      } else {
        newdisplay = display.substring(0, display.length - 1);
        setDisplay(newdisplay + operator);
      }
    } else setDisplay((prev) => prev + operator);
    console.log(newdisplay);
  };

  return (
    <div className="calculator card">
      <input
        type="text"
        className="calculator-screen"
        value={display === "" ? 0 : display}
        disabled
      />
      <input className="calculator-screen result" value={result} disabled />
      <div className="calculator-keys">
        <button
          type="button"
          onClick={() => {
            handleOperator("+");
          }}
          className="operator"
        >
          +
        </button>
        <button
          type="button"
          className="operator"
          onClick={() => {
            handleOperator("-");
          }}
        >
          -
        </button>
        <button
          type="button"
          className="operator"
          onClick={() => {
            handleOperator("x");
          }}
        >
          &times;
        </button>
        <button
          type="button"
          className="operator"
          onClick={() => {
            handleOperator("÷");
          }}
        >
          &divide;
        </button>

        <button
          type="button"
          className=" waves-effect"
          onClick={() => {
            handleNumber(7);
          }}
        >
          7
        </button>
        <button
          type="button"
          className=" waves-effect"
          onClick={() => {
            handleNumber(8);
          }}
        >
          8
        </button>
        <button
          type="button"
          className=" waves-effect"
          onClick={() => {
            handleNumber(9);
          }}
        >
          9
        </button>

        <button
          type="button"
          className=" waves-effect"
          onClick={() => {
            handleNumber(4);
          }}
        >
          4
        </button>
        <button
          type="button"
          className=" waves-effect"
          onClick={() => {
            handleNumber(5);
          }}
        >
          5
        </button>
        <button
          type="button"
          className=" waves-effect"
          onClick={() => {
            handleNumber(6);
          }}
        >
          6
        </button>

        <button
          type="button"
          className=" waves-effect"
          onClick={() => {
            handleNumber(1);
          }}
        >
          1
        </button>
        <button
          type="button"
          className=" waves-effect"
          onClick={() => {
            handleNumber(2);
          }}
        >
          2
        </button>
        <button
          type="button"
          className=" waves-effect"
          onClick={() => {
            handleNumber(3);
          }}
        >
          3
        </button>

        <button
          type="button"
          className=" waves-effect"
          onClick={() => {
            handleNumber(0);
          }}
        >
          0
        </button>
        <button
          type="button"
          className="decimal"
          onClick={() => {
            handleNumber(-1);
          }}
        >
          .
        </button>
        <button
          type="button"
          className="all-clear"
          onClick={() => {
            allClear();
          }}
        >
          AC
        </button>

        <button
          type="button"
          className="equal-sign"
          onClick={() => {
            shiftValue();
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
