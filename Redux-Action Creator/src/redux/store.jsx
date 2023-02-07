import { createStore } from "redux";
import Reducer from "./reducer/Reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(Reducer, enhancer());

export default store;
