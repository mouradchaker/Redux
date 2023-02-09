import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, incrementByAmount } from "../redux/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncByValue = (vl) => {
    dispatch(incrementByAmount(vl));
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
