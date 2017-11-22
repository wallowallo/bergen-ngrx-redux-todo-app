import { Action } from '@ngrx/store';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO_COMPLETED } from '../actions/todos';

export function todosReducer(state: any, action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return state;

    case REMOVE_TODO:
      return state;

    case TOGGLE_TODO_COMPLETED:
      return state;

    default:
      return state;
  }
}
