export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SET_COMPLETE = 'SET_COMPLETE';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  }
}

export const updateTodo = (id, value) => {
  return {
    type: UPDATE_TODO,
    id,
    value
  }
}

export const setComplete = (id) => {
  return {
    type: SET_COMPLETE,
    id
  }
}