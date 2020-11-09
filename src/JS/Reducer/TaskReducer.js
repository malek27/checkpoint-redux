import { ADD, CHECK, DELETE, EDIT } from "../Constants/ActionTypes";

const InisialState = {
  tasks: [],
};

export const task = (state = InisialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case DELETE:
      return { ...state, tasks: state.tasks.filter(el => el.id !== action.payload) };

    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.id ? { ...el, text: action.payload.text } : el
        ),
      };

    case CHECK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload ? { ...el, done: !el.done } : el
        ),
      };

    default:
      return state;
  }
};
