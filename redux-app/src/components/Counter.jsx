import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/action/type";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({
      type: INCREMENT,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: DECREMENT,
    });
  };
  return (
    <div className="contanier">
      <button className="increment" onClick={handleIncrement}>
        increment
      </button>
      <p>{count}</p>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default Counter;
