import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  IncrementByValue,
} from "../redux/action/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAction());
  };

  const handleDecrement = () => {
    dispatch(decrementAction());
  };

  const handleIncByValue = (vl) => {
    dispatch(IncrementByValue(vl));
  };
  return (
    <div className="contanier">
      <button className="increment" onClick={handleIncrement}>
        Increment
      </button>
      <p>{count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => handleIncByValue(3)}>Increment by 3</button>
    </div>
  );
};

export default Counter;
