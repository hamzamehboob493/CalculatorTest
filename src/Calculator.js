import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleClick = (e) => {
    const value = e.target.getAttribute('data-value');

    switch (value) {
      case "C":
        setDisplay("0");
        setFirstOperand(null);
        setOperator(null);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        setOperator(value);
        setFirstOperand(display);
        setDisplay("0");
        break;
      case "=":
        try {
          const evaluatedExpression = Function(`return ${firstOperand} ${operator} ${display}`)();
          if (!isFinite(evaluatedExpression)) {
            setDisplay("Error: Division by zero");
          } else {
            setDisplay(evaluatedExpression);
          }
        } catch (error) {
          setDisplay("Error: Invalid expression");
        }
        break;
      case "%":
        setDisplay(String(display / 100));
        break;
      default:
        if (display === "0") {
          setDisplay(value);
        } else {
          setDisplay(display + value);
        }
    }
  };

  return (
      <div className="calculator">
        <div data-testid="display" className="display">{display}</div>
        <div className="keypad">
          <div className="key" onClick={handleClick} data-value="1">
            1
          </div>
          <div className="key" onClick={handleClick} data-value="2">
            2
          </div>
          <div className="key" onClick={handleClick} data-value="3">
            3
          </div>
          <div data-testid="key-/" className="key" onClick={handleClick} data-value="/">
            /
          </div>
          <div className="key" onClick={handleClick} data-value="4">
            4
          </div>
          <div className="key" onClick={handleClick} data-value="5">
            5
          </div>
          <div className="key" onClick={handleClick} data-value="6">
            6
          </div>
          <div data-testid="key-*" className="key" onClick={handleClick} data-value="*">
            *
          </div>
          <div data-testid="key-7" className="key" onClick={handleClick} data-value="7">
            7
          </div>
          <div data-testid="key-8" className="key" onClick={handleClick} data-value="8">
            8
          </div>
          <div className="key" onClick={handleClick} data-value="9">
            9
          </div>
          <div className="key" onClick={handleClick} data-value="C">
            C
          </div>
          <div className="key" onClick={handleClick} data-value=".">
            .
          </div>
          <div data-testid="key-0" className="key" onClick={handleClick} data-value="0">
            0
          </div>
          <div className="key" onClick={handleClick} data-value="+">
            +
          </div>
          <div className="key" onClick={handleClick} data-value="-">
            -
          </div>
          <div data-testid="key-=" className="key" onClick={handleClick} data-value="=">
            =
          </div>
          <div className="key" onClick={handleClick} data-value="%">
            %
          </div>
        </div>
      </div>
  );
};

export default Calculator;
