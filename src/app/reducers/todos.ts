import * as todos from '../actions/todos';
import { Todo } from '../models/todo';

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: []
};

export const todosReducer = (state = initialState, action: todos.Actions): State => {
  switch (action.type) {
    case todos.ADD_TODO: {
      const toDo = action.payload;

      return Object.assign({}, state, {todos: [...state.todos, toDo]});
    }

    case todos.DELETE_TODO:
      const todo = action.payload;

      return Object.assign({}, state, {
        todos: state.todos.filter(t => t !== todo)
      });

    case todos.TOGGLE_TODO_COMPLETED:
      return state;

    default:
      return state;
  }
};
