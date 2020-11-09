import { createStore } from "redux";
import {task} from "../Reducer/TaskReducer";
export const store = createStore(
  task,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
