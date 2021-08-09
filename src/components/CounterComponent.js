import React, { useState } from "react";
import "./CounterComponent.css";
// geting fontawesome imports
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CounterComponent = () => {
  const [enterCount, setEnteredCount] = useState(0);

  const addCounterHandler = () => {
    setEnteredCount(enterCount + 1);
  };
  const reduceCounterHandler = () => {
    setEnteredCount(enterCount - 1);
  };
  const resetCounterHandler = () => {
    setEnteredCount(0);
  };
  return (
    <div className="counter">
      <div className=".countNumber">
        <div className="counter-count">{enterCount}</div>
      </div>
      <div className="count-handler">
        <div className="counter-control" onClick={addCounterHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="counter-control" onClick={reduceCounterHandler}>
          <FontAwesomeIcon icon={faMinus} />
        </div>
      </div>
      <div className="btn" onClick={resetCounterHandler}>
        Reset
      </div>
    </div>
  );
};
export default CounterComponent;
