import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';

export const ADD_TODO = '[Todos] Add Todo';
export const DELETE_TODO = '[Todos] Delete Todo';
export const TOGGLE_TODO_COMPLETED = '[Todos] Toggle Todo';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: Todo) { }
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(public payload: Todo) { }
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO_COMPLETED;

  constructor(public payload: Todo) { }
}

export type Actions
  = AddTodoAction
  | DeleteTodoAction
  | ToggleTodoAction;
