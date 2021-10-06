import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  SET_COMPLETE
} from "./actions";

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.id);
    case UPDATE_TODO:
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            todo: action.value
          }
        }
        return item;
      });
    case SET_COMPLETE:
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            complete: true
          }
        }
        return item;
      })
    default:
      return state;
  }
}