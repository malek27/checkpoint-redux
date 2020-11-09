import { ADD, DELETE, EDIT,CHECK } from "../Constants/ActionTypes";

export const add = (payload) => {
  return { type: ADD, payload };
};
export const deleteTask = (payload) => {
  return { type: DELETE, payload };
};
export const edit = (payload) => {
  return { type: EDIT, payload };
};
export const check = (payload) => {
    return { type: CHECK, payload };
  };
