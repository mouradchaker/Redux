import { DECREMENT, INCREMENT, INC_BY_VALUE } from "../action/type";

const Reducer = (state = { count: 0 }, action) => {
  if (action.type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  } else if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INC_BY_VALUE) {
    return { ...state, count: state.count + action.payload };
  } else {
    return state;
  }
};

export default Reducer;
