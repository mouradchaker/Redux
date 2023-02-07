import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./type";

export const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

export const IncrementByValue = (vl) => {
  return {
    type: INC_BY_VALUE,
    payload: vl,
  };
};
