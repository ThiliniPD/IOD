import React, { useState } from "react";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function Calculator() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [operator, setOperator] = useState("+");
    const [output, setOutput] = useState(0);

    function getOperation(operator) {
        if (operator === "+") {
            return add;
        }
        if (operator === "-") {
            return subtract;
        }
        if (operator === "*") {
            return multiply;
        }
        if (operator === "/") {
            return divide;
        }
    }

    function selectOperation(selectedOperator) {
        setOperator(selectedOperator);
    }

    function doEqual() {
        const operation = getOperation(operator);
        setOutput(operation(parseFloat(input1), parseFloat(input2)));
    }

    function resetCalculator() {
        setInput1(0);
        setInput2(0);
        setOperator("+");
        setOutput(0);
    }

    return (
        <div>
            <h2>Calculator</h2>
            <form>
                <input type="number" id="myNumber1" name="input1" value={input1} placeholder="Number 1" onChange={(e) => setInput1(e.target.value)} />
                <br />
                <button type="button" className={`operator_btn ${operator == "+" ? "operator_btn_selected" : ""}`} onClick={() => selectOperation("+")}>+</button>
                <button type="button" className={`operator_btn ${operator == "-" ? "operator_btn_selected" : ""}`} onClick={() => selectOperation("-")}>-</button>
                <button type="button" className={`operator_btn ${operator == "*" ? "operator_btn_selected" : ""}`} onClick={() => selectOperation("*")}>x</button>
                <button type="button" className={`operator_btn ${operator == "/" ? "operator_btn_selected" : ""}`} onClick={() => selectOperation("/")}>/</button>
                <br />
                <input type="number" id="myNumber2" name="input2" value={input2} placeholder="Number 2" onChange={(e) => setInput2(e.target.value)} />
                <br />
                <button type="button" className="operator_btn" onClick={doEqual}>=</button>
                <br />
                <input type="number" id="myNumber3" name="output" value={output} placeholder="Number 3" readOnly />
                <br />
                <button type="button"  className="operator_btn" id="resetbutton" onClick={resetCalculator}>
                    Reset
                </button>
            </form>
        </div>
    );
}

export default Calculator;